

export default function Section({icon,children,sectionTitle}) {
    return (
        <div className='mx-5 my-8'>

            <div className='flex items-center my-3 mb-4'>
                {icon}
                <h1 className='font-bold text-2xl mx-2'>{sectionTitle}</h1>
            </div>
            {children}
        </div>
    )
}
