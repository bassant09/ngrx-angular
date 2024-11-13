import { createAction, props } from "@ngrx/store";

export const loadApplications = createAction('[Applications] Load Applications'
)
export const loadApplicationsSuccess = createAction('[Applications] Success Load Applications',
    props<{ applications: any[] }>()
)
export const loadApplicationsFailure = createAction('[Applications] Failure Load Applications',
    props<{ error: any }>()
)
