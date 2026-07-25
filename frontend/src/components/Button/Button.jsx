export default function Button({
    children,
    variant = "primary",
    onClick,
}) {
    const base =
        "px-6 py-3 rounded-xl font-medium transition-all duration-300";

    const styles = {
        primary:
            "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105",

        secondary:
            "border border-slate-300 text-slate-700 hover:bg-slate-100",
    };

    return (
        <button
            onClick={onClick}
            className={`${base} ${styles[variant]}`}
        >
            {children}
        </button>
    );
}