
const ResumeButton = () => {
  return (

    <a className='w-full flex justify-center mb-12' download="mattgehrlsrésumé" href='/files/mattgehrlsrésumé.pdf' target='_blank' rel='noopener noreferrer'>
        <div className='py-2 w-full max-w-sm bg-slate-300 text-slate-900 hover:bg-slate-700 hover:text-slate-100 hover:scale-110 transform transition-all duration-300 ease-in-out rounded-md'>
            <p className='text-center'>Download Résumé</p>
        </div>
    </a>
  );
};

export default ResumeButton;