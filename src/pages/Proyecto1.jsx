import { ChannelBar } from "../components/Proyecto1Components/ChannelBar"
import { ContentContainer } from "../components/Proyecto1Components/ContentContainer"
import { Sidebar } from "../components/Proyecto1Components/Sidebar"

export const Proyecto1 = ()=> {
    return(
        <>
        <main className="flex h-screen">
            <Sidebar />
            <ChannelBar />
            <ContentContainer />
        </main>
        </>
    )
}