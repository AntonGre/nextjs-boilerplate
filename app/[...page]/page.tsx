export default async function Page() {
  return <div>...page</div>;
}

export async function generateStaticParams() {
  return [
    {
      page: ["page1"],
    },
    {
      page: ["page2"],
    },
  ];
}
