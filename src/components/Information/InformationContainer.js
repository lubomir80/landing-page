import './InformationContainer.scss'

function InformationContainer({ children, id }) {
   return (
      <section className='information' id={id}>{children}</section>
   )
}

export default InformationContainer