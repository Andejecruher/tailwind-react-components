export function Lists() {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="mb-2 text-lg font-medium">Lista ordenada</h4>
                <ol className="list-decimal space-y-1 pl-6">
                    <li>Primer elemento de la lista</li>
                    <li>Segundo elemento de la lista</li>
                    <li>Tercer elemento de la lista</li>
                </ol>
            </div>
            <div>
                <h4 className="mb-2 text-lg font-medium">Lista no ordenada</h4>
                <ul className="list-disc space-y-1 pl-6">
                    <li>Elemento de la lista</li>
                    <li>Otro elemento de la lista</li>
                    <li>Un elemento más de la lista</li>
                </ul>
            </div>
        </div>
    )
}