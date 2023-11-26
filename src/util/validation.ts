import en from '@/shared/lang/en'
import * as yup from 'yup'

export const recordValidation = yup.object({
    eng: yup.string().required(en.record.validation),
    ja: yup
        .string()
        .required(en.record.validation)
        .matches(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/, {
            message: en.record.validation2,
        }),
})
