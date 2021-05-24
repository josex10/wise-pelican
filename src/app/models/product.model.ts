import { PlanModel } from './plan.model';

export class ProductModel {

    constructor(
        public id: string = '',
        public name: string = '',
        public features: string[] = [],
        public plans: PlanModel[] = []
    ) {};
}
