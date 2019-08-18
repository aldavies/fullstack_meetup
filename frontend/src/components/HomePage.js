import React from 'react';
import styled from 'styled-components'
import classroomPic from '../images/classroom.jpeg'
import upcomingeventsPic from '../images/upcomingEvents.jpeg'
import teamwork from '../images/teamwork.jpeg'
import groupCoders from '../images/groupofcoders.jpeg'

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const IntroParagraph = styled.div`
    line-height: 2.0;
    padding: 10px;
`

const PicContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const PicSection = styled.div`

    flex: 0 0 50%;
    background-image: url(${classroomPic});
    filter: brightness(75%);
    height: 100vh;
    position: sticky;
    top: 20px;
    background-color: transparent;
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const PicParagraph = styled.div`
    flex: 0 0 50%;
    line-height: 2.0;
    padding: 10px;
`
const EventSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    margin-bottom: 5px;
`

const EventImg = styled.img`
    height: 200px;
    width: 250px;
    margin-left: 5px;

`

const Credits = styled.div`
    margin-top: 50px;
    border-top: 1px solid grey;
    line-height: 2;
    font-size: 12px;
    text-align: center;
`

const AppreciateButton = styled.button`
    width: 10%;
    margin: 0 auto;
`



const HomePage = () => {
    return (
        <HomePageContainer>
            <IntroParagraph>
                <h2 className="main-header" style={{textAlign: "center"}}>Check out our community!</h2>
                <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
            </IntroParagraph>
            <PicContainer>
                <PicSection />
                <PicParagraph>
                    <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                </PicParagraph>
            </PicContainer>
            <h2 style={{textAlign: "center"}}>Events</h2>
            <EventSection>
                <EventImg src={upcomingeventsPic} alt="upcoming-events" />
                <EventImg src={teamwork} alt="teamwork" />
                <EventImg src={groupCoders} alt="group-of-coders" />
            </EventSection>
            <AppreciateButton>Appreciate</AppreciateButton>
            <Credits>
                <h2 style={{textAlign: "center"}}>Credits</h2>
                <p>
                    Created with images by MIND AND I - "Programmer working in a software development and coding technologies. Website design.Technology concept."•
                    Monkey Business - "Female High School Teacher Standing By Student Table Teaching Lesson"•
                    MichaelJBerlin - "Text Upcoming Events written in notepad, Office desk with computer technology, high angle"•
                    kasto - "Speaker giving a talk in conference hall at business event. Audience at the conference hall. Business and Entrepreneurship concept. Focus on unrecognizable people in audience."•
                    janifest - "Healthy organic gluten-free delicious green snacks salads on catering table during corporate event party"•
                    santoelia - "Wedding hall or other function facility set for fine dining"•
                    Vasyl - "Group of people working in modern office"
                </p>
            </Credits>
        </HomePageContainer>
    )
}

export default HomePage