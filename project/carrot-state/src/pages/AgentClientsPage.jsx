import React from 'react'
import CardAgent from '../components/CardAgent' 
import NavBar from '../components/NavBar'
import RowBienvenida from '../components/RowBienvenida'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import SelectPages from '../continuous/SelectPages'
import InterBodoquesCard from '../components/InterBodoquesCard'
import '../styles/stylespage/AgentPage.css'

function AgentClientsPage(){
    return(
        <>
        <div className="row fondo-deg">
            <section className="row fondo-img">
                <div className="row header nav-bar fixed-top">
                    <NavBar isAgent={3}/>
                </div>
                <div className="row align-items-center justify-content-center bie">
                    <RowBienvenida texto={"Mira los clientes de tu propiedades"}/>
                </div>
            </section>
            <section className="container">
                    <div className="row justify-content-center mt">
                        <div className="col-4">
                            <h2 className='hsblack'>Lista de propiedades</h2>
                        </div>
                    </div>
                </section>    
            <section className="row">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 mt">
                            <SelectPages id={"Select"} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt">
                <InterBodoquesCard/>
            </section>
            <section className="row fondo-footer">
                <Footer/>
                {/*footer*/}
            </section>
        </div>    
    </>
    )
}

export default AgentClientsPage