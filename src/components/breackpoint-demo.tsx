export default function BreakpointDemo() {
    return (
        <div className="text-center mt-10 text-2xl font-bold">
            {/* Móvil (menor a @md) */}
            <p className="block @md:hidden text-blue-500">📱 Vista móvil</p>

            {/* Tablet (@md a @lg) */}
            <p className="hidden @md:block @xl:hidden text-green-500">🧮 Vista tablet</p>

            {/* Escritorio (@lg en adelante) */}
            <p className="hidden @xl:block text-purple-500">💻 Vista escritorio</p>
        </div>
    );
}
