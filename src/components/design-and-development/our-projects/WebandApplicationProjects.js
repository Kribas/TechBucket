import React from 'react'
import Banner from '../../Banner'
import Header from '../../Header'
import { ArrowForward } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import './WebandApplicationProjects.css';
import Footer from '../../footer/Footer';

export default function WebandApplication() {

    const projects = [
        {
            id: 0,
            title: 'Project Title',
            image: 'https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 1,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 2,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 3,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 4,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 5,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 6,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 7,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
        {
            id: 8,
            title: 'Project Title',
            image: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id871030872?k=20&m=871030872&s=612x612&w=0&h=j4ojqBQ2uAUK9B_D3ZJ5MzPzxrP5fQCUhk0NpOqwGWw='
        },
    ]

  return (
    <div className='web-and-application'>
        <Header/>
        <Banner/>

        <div className='container'>
        <div className="page-nav d-flex align-items-center">
          <Link className="text-decoration-none" to="/">
            <p>
              HOME <ArrowForward />
            </p>
          </Link>
          <Link className="text-decoration-none" to="/designanddevelopment">
            <p>DESIGN AND DEVELOPMENT <ArrowForward/></p>
          </Link>
          <Link className="text-decoration-none" to="/ourprojects">
            <p>OUR PROJECTS</p>
          </Link>
        </div>

        </div>
        <ProjectItem projects={projects}/>
        <Footer/>
    </div>
  )
}
