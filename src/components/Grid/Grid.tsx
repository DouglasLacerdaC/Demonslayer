import { useRef, useState } from 'react'
import { Card } from '../Card/Card'
import { Modal } from '../Modal/Modal'
import './Grid.css'

type PropsGrid = {
    firstColumn: string[],
    secondColumn: string[],
    thirdColumn: string[],
    fourthColumn: string[],
    fifthColumn: string[],
}

export function Grid(props: PropsGrid) {

    const morphModalRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    
    const [positionMorph, setPositionMorph] = useState<string[]>(['0px', '0px'])
    const [imageModal, setImageModal] = useState<string>("")

    const modalOpen = (e: any) => {

        checkingScroll()

        setImageModal(() => e.target.src)
        
        const positionImage = e.target.getBoundingClientRect()

        morphModalRef.current?.classList.add('opening-morph')
        modalRef.current?.classList.add('opening-modal')
        
        setPositionMorph([
            `${positionImage.top + positionImage.height / 2 - 25}px`,
            `${positionImage.left + positionImage.width / 2 - 25}px`
        ])

    }

    const modalClose = () => {
        
        morphModalRef.current?.classList.add('closing-morph')
        modalRef.current?.classList.add('closing-modal')
        
        setTimeout(() => {
            
            morphModalRef.current?.classList.remove('closing-morph')
            morphModalRef.current?.classList.remove('opening-morph')
            modalRef.current?.classList.remove('closing-modal')
            modalRef.current?.classList.remove('opening-modal')
            
        }, 1000)
        
    
    }

    const checkingScroll = () => {
        const scroll = document.body.style

        if(scroll.overflow == 'hidden')
            scroll.overflow = 'auto'
        else if (scroll.overflow == 'auto')
            scroll.overflow = 'hidden'
    }

    return (
        <section>

            <div className="container">
            
                <h1 className='title'>Wallpapers</h1>
                <p className='subtitle'>Encontre imagens para você colocar na sua tela de smartphone, notebook e desktop.</p>

                <div className="morph-modal" style={{ top: positionMorph[0], left: positionMorph[1] }} ref={morphModalRef}
                    onClick={modalClose} >

                </div>

                <div className="container-modal" ref={modalRef}>
                    <Modal url={imageModal} />
                </div>

                <div className="grid">

                    <div className="column">

                        {props.firstColumn.map((image: string, key: number) => {
                            return (
                                <div className="card" key={key} onClick={modalOpen} >
                                    <Card src={image} />
                                </div>
                            )
                        })}

                    </div>
                    
                    <div className="column">

                        {props.secondColumn.map((image: string, key: number) => {
                            return (
                                <div className="card" key={key} onClick={modalOpen} >
                                    <Card src={image} />
                                </div>
                            )
                        })}

                    </div>
                    
                    <div className="column">

                        {props.thirdColumn.map((image: string, key: number) => {
                            return (
                                <div className="card" key={key} onClick={modalOpen} >
                                    <Card src={image} />
                                </div>
                            )
                        })}

                    </div>
                    
                    <div className="column">

                        {props.fourthColumn.map((image: string, key: number) => {
                            return (
                                <div className="card" key={key} onClick={modalOpen} >
                                    <Card src={image} />
                                </div>
                            )
                        })}

                    </div>
                    
                    <div className="column">

                        {props.fifthColumn.map((image: string, key: number) => {
                            return (
                                <div className="card" key={key} onClick={modalOpen} >
                                    <Card src={image} />
                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </section>
    )
}