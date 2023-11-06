import React, { useState, useEffect, useContext } from 'react';
import '../../index.css'
import { Contexto } from '../../Contexto/index'
import {PlusCircleIcon,XCircleIcon,CheckCircleIcon } from '@heroicons/react/24/solid'
import DayNight from '../DayNight/DayNight';

function Registro() {

  const {personas,setPersonas,edad,registro,
    setEdad,profesion, setProfesion, setRegistro,validarDatos, setValidarDatos
    ,validarNombre, setValidarNombre,nombre,setNombre,tarea, setTarea,selectedItems, setSelectedItems,dayNight, setDayNight
  } = useContext(Contexto)

  
 //que hacer al registrar los datos
 const handleRegister = () => {
  if (profesion.length > 0 && tarea.length > 0){
      const nuevaPersona = { profesion:profesion, tarea:tarea}
      personas.push(nuevaPersona)
      setRegistro([...personas],personas)
      setProfesion('')
      setTarea('')
      setFormModal(false)

     }
    else{
      setValidarDatos(true)
    }
  }
const handleValidarDatos = () =>{
  setValidarDatos(!validarDatos)
}
  //modal para validar si hay un nombre en el localStorage o no
  const [nameModal, setNamemodal] = useState(false)

  const handleValidador = () => {
    if(nombre.length>0 && edad>0 && edad < 110){
      setValidarNombre({nombre:nombre, edad: edad})
      
    }
    else {
      setNamemodal(!nameModal)
      setEdad('')
      setNombre('')
    }
 }

 const handleDelete = (persona) =>{
  const nuevaListaPersonas = personas.filter((p) => p !== persona);
  setRegistro(nuevaListaPersonas);
  setPersonas(nuevaListaPersonas);
 }

  const [formModal, setFormModal] = useState(false)
  const handleFormModal = () => {
    setFormModal(!formModal)
  }

  const handleI = (index) => {

    // Clonamos el arreglo de elementos seleccionados
    const newSelectedItems = [...selectedItems];
    
    // Verificamos si el índice ya está en la lista de seleccionados.

    if (newSelectedItems.includes(index)) {
      // Si está en la lista, quitamos el índice para 'deseleccionar'.

      newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
    } else {
      // Si no está en la lista, lo agregamos 'seleccionamos'.
      newSelectedItems.push(index);
    }
    
    // Actualiza el estado con la nueva lista de elementos seleccionados
    setSelectedItems(newSelectedItems);
    console.log(newSelectedItems);
  };
  console.log(validarNombre.length);
  return (
    <>
      
      <section className='master-container flex justify-center items-center h-full  bg-[#060E1B] relative '>
          
          {validarNombre.length === 0 ? '' :  <DayNight/>}

            {/* --------------------------------------------------------------------------------------------   Modal de advertencia */}
          <div className={`modal ${nameModal? '': 'hidden'}`}>
            <div className='modal-content text-sm flex gap-3 justify-center items-center m-3'>
            <span>Por favor completa el formulario completo con tu Nombre y Edad</span>
            <button onClick={() => handleValidador()}> Aceptar </button>
            </div>
          </div>

          <div className={`register-input__container flex flex-col justify-center items-center gap-4 py-4 rounded-md
             absolute w-full h-screen backdrop-blur-md   ${formModal? 'z-[1] bg-[#000000aa]' : ''}`}>
              
              <div className={`relative tarea-form-container flex flex-col gap-4 w-[400px]  border-2 border-[#64FFDA] rounded-md p-6 sm:w-11/12
                ${formModal ? '' : 'hidden'}`}>
                  <h1 className='text-[#cecece] text-center'>Agrega una tarea :) 
                    <XCircleIcon 
                      className='absolute right-[6px] top-3 text-right w-9 h-9 text-red-600 bg-white rounded-full' 
                      onClick={() => handleFormModal()}
                      />
                  </h1>
                <div className='trarea-form-small flex gap-4 '>
                  <input 
                    className='profesion-input p-3 rounded-md text-[#cecece] w-full bg-[#ffffff3b]'
                    type='text'
                    inputMode="text"
                    placeholder='Titulo de la tarea'
                    onChange={(event) =>
                      { const nuevoTexto = event.target.value
                      setProfesion(nuevoTexto)}}
                    value={profesion}>
                  </input>
                </div>

                <div className='tarea-form-big'>
                  <textarea
                      className=' bg-[#ffffff3b] tarea-input p-3 rounded-md text-[#cecece] w-full max-h-[200px] overflow-y-auto resize-none max-w-full'
                      placeholder='Tarea...'
                      onChange={(event) => {
                        const nuevaTarea = event.target.value;
                        setTarea(nuevaTarea);
                      }}
                      value={tarea}
                    ></textarea>
                </div>

              {/*--------------------------------------------------------------------------------------- AddButton */}
                <button
                className='p-3 text-white bg-[#cecece1d] border-none hover:text-[#64FFDA]  transition-all rounded-md'
                  onClick={ () => handleRegister()}
                  type='submit'
                  >Agregar la lista
                </button>       
              </div>
            
          </div>

          {/* Condicional ventana principal */}
        {!validarNombre.edad  && !validarNombre.nombre ?
          <div className='relative name-container flex  gap-4   p-5 rounded-md   border-2 border-[#64ffdb75]  max-w-5xl  w-full
            sm:flex-col  sm:w-11/12' >
            <h1 className='absolute top-[-40px] text-[#cecece] right-[calc(50%-90px)]' >Pon tu nombre y tu edad</h1>
            <input className='profesion-name p-3 rounded-md text-[#f2f2f2] bg-[#ffffff3b] placeholder:text-[#cececebe]'
                type='text'
                inputMode="text"
                placeholder='Agrega tu Nombre'
                onChange={(event) =>
                  { const nuevoNombre = event.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setNombre(nuevoNombre)}}
                value={nombre}>
            </input>

            <input 
              className='age-input p-3 rounded-md text-[#f2f2f2] w-full bg-[#ffffff3b] placeholder:text-[#cececebe]'
              type="number" 
              placeholder='Agrega tu edad'
              onChange={(event) =>{
                const edadp = parseInt(event.target.value)
                edadp >=0? 
                setEdad(event.target.value): null}}
              value={edad}>
            </input> 

            <button 
              className='p-3 text-white bg-[#060E1B] border-2 border-[#64FFDA] hover:text-[#64FFDA]  transition-all rounded-md
                hover:bg-[#64ffdb18]'
              onClick={() => handleValidador()}>
              Agregar
            </button> 
          </div>

         :
          <section className={`app-tarea_container max-w-[1200px]  w-full flex gap-14 sm:gap-4 text-[#cecece]  border-2 border-[#64FFDA] 
            p-8 rounded-md relative m-4 
            max-h-[80vh] sm:p-3 sm:m-0 sm:flex-col sm:border-none transition-all duration-300 ease-in ${personas.length > 0 ? '' :'sm:h-[70vh]'} ${!dayNight? '' : 'bg-[#2fbaf7]'}`}>

            <div className={`user-container flex flex-col justify-center items-center sm:w-full sm:h-full ${personas.length >0? 'w-1/3' : 'w-full'}`}>

              <div className={`user-title relative flex flex-col justify-center content-center sm:h-full gap-5  ${personas.length >0 ? 'sm:gap-4' : 'sm:gap-14'}`}>
              
                <h1 className={`user-title bg-[#2b3648] p-4 rounded-md text-center ${!dayNight? '' : 'bg-[#175995f0]' }  `}>
                  {registro.length>0? `Bienvenido ${validarNombre.nombre}, Crea todas las tareas que quieras ;)` : `Bienvenido ${validarNombre.nombre}, Crea tu primera Tarea ;)`}
                </h1>
                
                <button 
                className=' border-none w-full flex  justify-center'
                onClick={() => handleFormModal()}  > 
                {!formModal ? <PlusCircleIcon className={`h-28 w-28 text-green-500 border-none hover:text-[#64FFDA] sm:h-15 sm:w-15
                  ${!dayNight? '' : 'bg-[#c9c3c3] rounded-full'} `}/> : null}
              </button> 
              </div>
              
            </div>

            <div className={`'register-content overflow-auto p-3 flex flex-col gap-3 w-2/3 sm:w-full sm:p-0 ' ${personas.length >0? '' : 'hidden'}`}>
            
              {personas.map((persona,index) => (
                 
                <div key={index} 
                  className={`info-content z-0 flex flex-col justify-around w-full font-bold text-lg relative rounded-md p-2 items-start transition-all cursor-pointer sm:py-5
                    ${selectedItems.includes(index) ? 'bg-green-600' : 'bg-slate-300'} `}


                    onClick={() => handleI(index)}
                   >

                  <div className='render-small flex justify-center items-center gap-2'>
                    <p className='fade-in text-black font-bold text-lg sm:text-xl'>{`${persona.profesion}`} </p>
                  </div>

                  <div className='render-big  flex justify-center items-centerck'>
                   <p  className='fade-in text-black font-normal text-xs sm:text-lg'>{`${persona.tarea}`} </p>

                  </div>

  
                  <button 
                    type='submit'
                    onClick={() => handleDelete(persona)}
                    className='absolute  border-none flex justify-center items-center p-0 bg-white  z-10 rounded-full top-1 right-1'>
                      <XCircleIcon className='h-8 w-8 text-red-600 border-none hover:text-white hover:bg-red-600 hover:rounded-full transition-all  '/>
                  </button>

                



                </div>
            ))}

            </div>

          </section>
        }

        {/* --------------------------------------------------------------------------------------------   Modal de advertencia */}
        <div className={`modal ${validarDatos? '': 'hidden'}`}>
          <div className='modal-content text-sm flex gap-3 justify-center items-center z-20 m-3 '>
            <span >Introduce Tu profesion y tu edad</span>
            <button onClick={() => handleValidarDatos()}> Aceptar  </button>
          </div>
        </div> 
      </section>
      
 
    </>
  )
}
export default Registro
