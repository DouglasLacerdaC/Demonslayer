import './Banner.css'

type propsBanner = {
    img: string
}

export function Banner(props: propsBanner) {
    return (
        <div className="banner" style={{ backgroundImage: `url('${props.img}')` }}></div>
    )
}