/*
 * The request result status.
 */
export class RequestStatus {

  constructor(public requestState: RequestState, public message: string) {
  }
}

export enum RequestState {
  Idle,
  Pending,
  Success,
  Error
}
