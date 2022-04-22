import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxu" subtitle="Super X">
                    <Link to="/rooms/" className="btn-primary">
                        stanze
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}