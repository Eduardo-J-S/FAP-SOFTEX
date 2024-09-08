import { PrismaClient } from "@prisma/client";
import { Product } from "../../../entities/product";
import { ProductRepository } from "../product.repository";

export class ProductrepositoryPrisma implements ProductRepository {

    private constructor(readonly prisma: PrismaClient) { }


    public static build(prisma: PrismaClient) {
        return new ProductrepositoryPrisma(prisma);
    }

    public async save(product: Product): Promise<void> {
        const data = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        }

        await this.prisma.product.create({ data, })
    }

    public async list(): Promise<Product[]> {
        const list = await this.prisma.product.findMany();
        const products: Product[] = list.map((p) => {
            const { id, name, price, quantity } = p;
            return Product.with(id, name, price, quantity)
        })
        return products;
    }

    public async update(product: Product): Promise<void> {
        const existingProduct = await this.prisma.product.findUnique({
            where: {
                id: product.id
            }
        });
        const data = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        }

        if (!existingProduct) {
            throw new Error(`O produto ${product.id} não foi encontrado`)
        } else {
            const updatedProduct = await this.prisma.product.update({
                where: {
                    id: product.id
                },
                data,
            });
            console.log("Produto atualizado com sucesso:", updatedProduct);
        }
    }

    public async find(id: string): Promise<Product | null> {
        const existingProduct = await this.prisma.product.findUnique({
            where: {
                id: id
            }
        });

        if (!existingProduct) {
            return null
        }
        const product = Product.with(existingProduct.id, existingProduct.name, existingProduct.price, existingProduct.quantity);
        return product;
    }

}