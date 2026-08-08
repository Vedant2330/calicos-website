import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProduct } from "@/data/products";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const allProducts = getAllProducts();
  return allProducts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} — Calicos`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  
  return (
    <div className="min-h-screen bg-cream px-page py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-sand rounded-2xl overflow-hidden relative">
            {/* Product image would go here */}
            <div className="absolute inset-0 flex items-center justify-center text-ink/40">
              Product Image
            </div>
          </div>
          <div>
            <p className="text-eyebrow text-warm-gray mb-2">{product.collection}</p>
            <h1 className="text-display-md text-ink font-serif font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-body text-ink/70 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-caption text-ink/60 px-3 py-1 rounded-full bg-ink/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://instagram.com/calicosdim"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Enquire on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
