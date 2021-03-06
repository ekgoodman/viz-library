library(dplyr)

### Input data
    DM <- read.csv('../SDTM/DM.csv', colClasses = 'character')
    AE <- read.csv('../SDTM/AE.csv', colClasses = 'character')
    CM <- read.csv('../SDTM/CM.csv', colClasses = 'character')
    SV <- read.csv('../SDTM/SV.csv', colClasses = 'character')
    LB <- read.csv('../SDTM/LB.csv', colClasses = 'character')
    VS <- read.csv('../SDTM/VS.csv', colClasses = 'character')

### Output data
    ### ADAE
        ADAE <- full_join(DM, AE) %>%
            arrange(USUBJID, AESEQ) %>%
            rename(
                ASTDY = AESTDY,
                AENDY = AEENDY
            )
            write.csv(
                ADAE,
                '../ADAE.csv',
                row.names = FALSE,
                na = ''
            )

    ### ADCM
        ADCM <- full_join(DM, CM) %>%
            arrange(USUBJID, CMSEQ) %>%
            rename(
                ASTDY = CMSTDY,
                CMNDY = CMENDY
            )
            write.csv(
                ADCM,
                '../ADCM.csv',
                row.names = FALSE,
                na = ''
            )

    ### ADTIMELINES
        ADTIMELINES = DM %>%
            full_join(
                rbind(
                    select(DM, USUBJID, RFSTDTC) %>%
                        mutate(
                            DOMAIN = 'Enrollment',
                            SEQ = 1,
                            STDY = 1,
                            ENDY = 1,
                            ENDT = RFSTDTC,
                            ONGO = NA
                        ) %>%
                        rename(
                            STDT = RFSTDTC
                        ) %>%
                        select(USUBJID, DOMAIN, STDT, STDY, ENDT, ENDY, SEQ, ONGO),
                    select(AE, USUBJID, AESTDT, AESTDY, AEENDT, AEENDY, AESEQ, AEONGO) %>%
                        mutate(
                            DOMAIN = 'Adverse Events'
                        ) %>%
                        rename(
                            STDT = AESTDT,
                            STDY = AESTDY,
                            ENDT = AEENDT,
                            ENDY = AEENDY,
                            SEQ = AESEQ,
                            ONGO = AEONGO
                        ) %>%
                        select(USUBJID, DOMAIN, STDT, STDY, ENDT, ENDY, SEQ, ONGO),
                    select(CM, USUBJID, CMSTDT, CMSTDY, CMENDT, CMENDY, CMSEQ, CMONGO) %>%
                        mutate(
                            DOMAIN = 'Concomitant Medications'
                        ) %>%
                        rename(
                            STDT = CMSTDT,
                            STDY = CMSTDY,
                            ENDT = CMENDT,
                            ENDY = CMENDY,
                            SEQ = CMSEQ,
                            ONGO = CMONGO
                        ) %>%
                        select(USUBJID, DOMAIN, STDT, STDY, ENDT, ENDY, SEQ, ONGO),
                    filter(SV, VISIT == 'Visit 1') %>%
                        mutate(
                            DOMAIN = 'Randomization',
                            SEQ = 1,
                            STDY = SVDY,
                            ENDY = SVDY,
                            ENDT = SVDT,
                            ONGO = NA
                        ) %>%
                        rename(
                            STDT = SVDT
                        ) %>%
                        select(USUBJID, DOMAIN, STDT, STDY, ENDT, ENDY, SEQ, ONGO),
                    filter(SV, VISIT == 'End of Study') %>%
                        mutate(
                            DOMAIN = 'Study Completion',
                            SEQ = 1,
                            STDY = SVDY,
                            ENDY = SVDY,
                            ENDT = SVDT,
                            ONGO = NA
                        ) %>%
                        rename(
                            STDT = SVDT
                        ) %>%
                        select(USUBJID, DOMAIN, STDT, STDY, ENDT, ENDY, SEQ, ONGO)
                )
            ) %>%
        mutate(
            TOOLTIP = paste('This mark definitely represents the', DOMAIN, 'domain', sep = ' ')
        ) %>%
        arrange(USUBJID, DOMAIN, SEQ)
        write.csv(
            ADTIMELINES,
            '../ADTIMELINES.csv',
            row.names = FALSE,
            na = ''
        )

    ### ADBDS
        names(LB) <- sapply(names(LB), function(name) {
            if (grepl('LB', name))
                return(substring(name, 3))
            else
                return(name)
        })
        names(VS) <- sapply(names(VS), function(name) {
            if (grepl('VS', name))
                return(substring(name, 3))
            else
                return(name)
        })
        LBVS <- plyr::rbind.fill(LB,VS) %>%
            rename(VISITN = VISITNUM)
        ADBDS <- full_join(DM, LBVS) %>%
            arrange(USUBJID, VISITN, CAT, TEST
        )
        write.csv(
            ADBDS,
            '../ADBDS.csv',
            row.names = FALSE,
            na = ''
        )
