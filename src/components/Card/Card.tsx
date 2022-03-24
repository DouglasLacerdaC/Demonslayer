type CardProps = {
    src: string
}

export function Card(props: CardProps) {

    return <img src={props.src} />

}