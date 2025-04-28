import { useState } from "react";

export function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        termsAccepted: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleRoleSelect = (role: string) => {
        setFormData((prev) => ({ ...prev, role }));
        setIsOpen(false);
    };

    const handleCheckboxToggle = () => {
        setFormData((prev) => ({ ...prev, termsAccepted: !prev.termsAccepted }));
    };

    const validateForm = () => {
        const newErrors = {
            username: formData.username ? "" : "El nombre de usuario es obligatorio.",
            email: /\S+@\S+\.\S+/.test(formData.email) ? "" : "El email no es válido.",
            password: formData.password.length >= 6 ? "" : "La contraseña debe tener al menos 6 caracteres.",
            role: formData.role ? "" : "Debes seleccionar un rol.",
            termsAccepted: formData.termsAccepted ? "" : "Debes aceptar los términos y condiciones.",
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario enviado:", formData);
            alert("Cuenta creada con éxito.");
            // Aquí puedes agregar lógica para enviar los datos a un servidor
        }
    };

    return (
        <form className="w-full max-w-sm space-y-4 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 p-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                    Nombre de usuario
                </label>
                <input
                    id="username"
                    placeholder="usuario123"
                    value={formData.username}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
                {errors.username && <p className="text-sm text-red-600">{errors.username}</p>}
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                />
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
            </div>
            <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                    Rol
                </label>
                <div className="relative">
                    <button
                        type="button"
                        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {formData.role || "Selecciona un rol"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 opacity-50"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white text-base shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <div className="p-1">
                                {["Usuario", "Administrador", "Editor"].map((role) => (
                                    <div
                                        key={role}
                                        className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                                        onClick={() => handleRoleSelect(role)}
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {errors.role && <p className="text-sm text-red-600">{errors.role}</p>}
            </div>
            <div className="flex items-center space-x-2">
                <button
                    type="button"
                    role="checkbox"
                    aria-checked={formData.termsAccepted}
                    onClick={handleCheckboxToggle}
                    className={`peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${formData.termsAccepted ? "bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900" : ""
                        }`}
                >
                    {formData.termsAccepted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    )}
                </button>
                <label htmlFor="terms" className="text-sm font-medium">
                    Acepto los términos y condiciones
                </label>
            </div>
            {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted}</p>}
            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
                Crear cuenta
            </button>
        </form>
    );
}