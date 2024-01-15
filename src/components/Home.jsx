function Home() {
    return (
        // h-screen w-9/12 overflow-y-scroll scroll-smooth
        <div className="overflow-y-scroll scrollbar-hidden xl:w-9/12">
            <div className="h-screen"></div>
            <div className="h-screen bg-green-50"></div>
            <div className="h-screen"></div>
            <div className="h-screen bg-cyan-900"></div>
        </div>
    )
}

export default Home;