export default function MarcoSimulador({ visual, controles, lecturas, notas }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          {visual}
        </div>
        <div className="flex flex-col gap-5 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          {controles}
        </div>
      </div>
      {lecturas && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{lecturas}</div>
      )}
      {notas && <div className="flex flex-col gap-3">{notas}</div>}
    </div>
  );
}
