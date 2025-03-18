import { Tab } from "../components/Tab.tsx";
import { TabBar } from "../components/TabBar.tsx";

export default function Dashboard() {
    return (
        <TabBar>
            <Tab>Collection</Tab>
            <Tab>Trade group 1</Tab>
            <Tab>Trade group 2</Tab>
            <Tab>Trade group 3</Tab>
        </TabBar>
    );
}
