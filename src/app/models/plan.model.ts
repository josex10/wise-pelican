export class PlanModel {

    constructor(
        public id: string = '',
        public paymentInterval: string = '',
        public priceCents: string = '',
        public currency: string = ''
    ) {};
}
