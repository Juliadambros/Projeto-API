import { Repository } from "typeorm";
import Product from "../entities/Product";

export default class ProductRepository extends Repository<Product>{
    
    public async findByName(name : string) : Promise<Product | undefined>{
        const product = this.findOne({where : {name}});
        return product;
    }

}