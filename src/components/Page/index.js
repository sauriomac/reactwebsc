import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/index.js'
import { PageContainer,Content,Items,ItemP, Btn, H1Item} from './Pageelement'


const Page = () => {

    const [isOpen, setisOpen] = useState(false);

    const toggle = ()=>{
        setisOpen(!isOpen);

    }

    return (
        <PageContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Content>
                <Items> 
                    <H1Item>
                       Greatest Sushi ever
                    </H1Item>
                    <ItemP>
                        ready in 30 minunts
                    </ItemP>
                    <Btn>ORDER HERE</Btn>
                </Items>
            </Content>
        </PageContainer>


    )
}

export default Page
