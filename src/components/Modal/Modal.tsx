import './Modal.css'

type PropsModal = {
    url: string
}

export function Modal(props: PropsModal) {

    return(
        <div className="modal">
            <img src={props.url} />
        </div>
    )    

}