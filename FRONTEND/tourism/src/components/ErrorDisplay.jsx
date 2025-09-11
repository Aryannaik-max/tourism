const ErrorDisplay = ({ message }) => (
    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <p className="font-bold">Oops! Something went wrong.</p>
        <p>{message}</p>
    </div>
);

export default ErrorDisplay