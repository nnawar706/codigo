import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const Output = ({ outputInfo }) => {

    const getOutput = () => {
        const status = outputInfo?.status?.id

        // compilation error
        if (status === 6) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-800">
                    {atob(outputInfo?.compile_output)}
                </pre>
            )
        }

        if (status === 3) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-green-800">
                    {atob(outputInfo.stdout) !== null ? `${atob(outputInfo.stdout)}` : null}
                </pre>
            )
        }

        if (status === 5) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-800">
                    Time Limit Exceeded
                </pre>
            )
        }

        return (
            <pre className="px-2 py-1 font-normal text-xs text-red-500">
                {atob(outputInfo?.stderr)}
            </pre>
        )
    }

    return (
        <div className="w-full">
            <p className="mb-3 text-sm font-medium">Output:</p>
            <Card className="w-full h-60 bg-[#090f1a] rounded-md text-white font-normal text-sm overflow-y-auto">
                {outputInfo ? getOutput() : null}
            </Card>
        </div>
    )
}

export default Output