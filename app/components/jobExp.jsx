
export default function JobExp ({business, title, time}) {


    return <>
    <div className="row w-100">
        <div className="col-lg-4"><h4 className="text-dark">{business}</h4></div>
        <div className="col-lg-4"><h4 className="text-secondary">{title}</h4></div>
        <div className="col-lg-4"><h4 className="text-secondary">{time}</h4></div>
    </div>
    </>
}