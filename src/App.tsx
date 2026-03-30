import './App.css'
const links = [
  { label: "About" , href:"#About"},
  { label: "Project" , href:"#Project"},
  { label: "Resume" , href:"#Resume"},
  { label: "Contact" , href:"#Contact"},
  
]
const projectCards = [
  {
    imgSrc: "/forum-preview.png",
    title: "Forum App",
    desc: "Full stack social platform built with REST API architecture, authentication, posts, comments, and likes.",
    skills: ["React", "NestJS", "Prisma/MySQL"],
    github: "https://github.com/your-repo",
    demo: ""
  },

  {
    imgSrc: "/clipboard-preview.png",
    title: "Clipboard Tracker",
    desc: "Desktop app that tracks and manages clipboard history for productivity.",
    skills: ["Electron", "SQLite"],
    github: "https://github.com/your-repo",
    demo: ""
  }
];

const stacks = [ "React" , "NestJs", "Express", "Electron", "MySQL" ,"TailwindCss" , "Typescript" , "Git", "Docker"]

function App() {

  return (
    <div className='min-h-screen bg-beige-200'>
      <header className='bg-stone-100 px-5 bg-beige-100 py-5'>
        <nav className='flex justify-between text-lg'>
          <div className='font-bold'>
            Minseok Kwon
          </div>
          <div className='flex gap-2 text-gray-700'> 
            {links.map(  ({label, href}) =>   (
              <a 
              key={label} href={href}
              className=''>
                  {label}
              </a>
            )) }
          </div>
          
        </nav>
      </header>
      
      {/* About */}
      <div className='flex flex-col p-10 gap-2'>
        
      <div className='inline-block'>
          <h1 className='text-2xl font-bold'>Hello, I'm Minseok Kwon.</h1>
        </div>
        <div className=''>
          <h2 className='text-xl text-yellow-800 font-semibold'>Full Stack Web Developer</h2>
        </div>
        <span className='text-slate-400'>I build practical web applications with React, Nestjs, Prisma, and MySQL</span>
        <div>
            <div className='flex gap-3'>
              <a href="https://github.com/MK013467">
                <img src="github.svg" className='w-8' />
              </a>
              <a href="https://www.linkedin.com/in/minsok-kwon-178b38182/">
                <img 
                  src="linkedin.svg"
                  className='w-8'
                  alt="linkedin-img" />
              </a>
              <a href="mailto:minsuk603@gmail.com">
                <img
                src="email.svg"
                className='w-8'
                alt="email-img"/>
              </a>
            </div>
            <h3 className='font-semibold py-3 '>About me</h3>
            <span> I'm a fulls tack web developer passionate about turning my skills and ideas into working applications. I studied Physics and Math-CSE in UCSD.
              I enjoy building organized resource efficients backend APIs and nice looking web pages.

            </span>
      
          </div>
          <div className='flex gap-3 flex-wrap'>
              {stacks.map((stack) => (
                <span key={stack} className='bg-ivory rounded-xl px-2 py-1'>{stack}</span>
              ))}
            </div>
      </div>

      {/* Project */}
      <div className='flex flex-col px-6 py-14 items-center bg-warm-gray'>
          <h3 className='text-2xl font-bold text-stone-900'> Project </h3>
          {/* Project Cards */}
          <div className='w-full mt-10 max-w-6xl'>
          {projectCards.map((card) => (
            <div 
            key={card.title}
            className='h-90 w-full bg-stone-100 p-5 mb-10'>
              <img src={card.imgSrc} alt=""
              className='h-40 w-full object-cover' />

              <h2
                className='font-bold text-base'>{card.title}</h2>
              <p className='text-sm'> {card.desc}</p>
              <div className='flex flex-wrap gap-2'>
            {card.skills.map((skill) => (
              <span
                key={skill}
                className='rounded-full bg-ivory px-3 py-1 text-xs font-medium text-stone-700'
              >
                {skill}
              </span>
            ))}
          </div>
            <div className='mt-2 flex items-center gap-3'>
              <a
                href={card.github}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100'
              >
                <img src='/github.svg' alt='github' className='w-4' />
                GitHub
              </a>

              {card.demo && (
                <a
                  href={card.demo}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90'
                >
                  Live Demo
                </a>
              )}
            </div>
            </div>
          ))}
          </div>
          
          {/* Resume and Contavt */}
          <div className='w-full'>
              <div>
                <span>Resume</span>

              </div>
      
              <div>
                <span>Contact</span>
                <a href="mailto:minsuk603@gmail.com"

                  className='flex'>
                    <img src="email.svg"
                    className='w-5 pr-1'
                    alt="contact-email" />
                    <span>minsuk603@gmail.com</span>
                </a>
                </div>
                <a href="https://www.linkedin.com/in/minsok-kwon-178b38182/"
                  className='flex'>
                  <img src="linkedin.svg"
                  className='w-5 pr-1'
                  alt="" />
                  <span className='text-sm'>linkedin.com/in/minsok-kwon-178b38182</span>
                </a>
              </div>
            </div>
      </div>
        
      
 
  )
}

export default App
