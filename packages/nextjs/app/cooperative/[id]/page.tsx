export default function Cooperative({ params }: { params: { id: string } }) {
  return (
    <div className="py-14 grid grid-cols-3 mx-16 gap-8">
      <h1>oi {params.id}</h1>
    </div>
  );
}
