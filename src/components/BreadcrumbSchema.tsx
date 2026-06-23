import React from "react";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const baseUrl = "https://www.sunlynksolar.com";

  const schemaList = items.map((item, index) => {
    const absoluteUrl = item.item.startsWith("http")
      ? item.item
      : `${baseUrl}${item.item.startsWith("/") ? "" : "/"}${item.item}`;

    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": absoluteUrl,
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaList,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
