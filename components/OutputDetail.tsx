import { OutputInfo } from '@/types/General'

const OutputDetail = ({ detail }: { detail: OutputInfo }) => {
    return (
        <div className="mt-8 flex justify-between">
            <p className="text-sm">
                Status: {" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                    {detail?.status?.description}
                </span>
            </p>
            <p className="text-sm">
                Memory: {" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                    {detail?.memory}
                </span>
            </p>
            <p className="text-sm">
                Time: {" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                    {detail?.time}
                </span>
            </p>
        </div>
    )
}

export default OutputDetail
