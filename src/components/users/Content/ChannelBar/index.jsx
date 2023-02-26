import styled from "styled-components";

const SideBar = styled.div`
    flex-direction: column;
    width: 240px;
    height: 100%;
    background-color: rgb(43, 45, 49);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const PrivateChannels = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    flex: 1;
`;

const Panel = styled.section`
    background-color: rgb(35, 36, 40);
    z-index: 1;
`;

const PanelContainer = styled.div `
    display: flex;
    height: 52px;
    padding: 0 8px;
    margin-bottom: 1px;
`;

const PanelAvatar = styled.div`
    min-width: 120px;
    margin-left: -2px;
    align-items: center;
    display: flex;
    margin-right: 8px;
`;



const ChannelBar = () => {
    return (
        <SideBar>
            <PrivateChannels>
                
            </PrivateChannels>
            <Panel>
                <PanelContainer>
                    <PanelAvatar>
                        <img
                            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#fff' }}
                            src='https://avatars.dicebear.com/api/open-peeps/seed.svg'
                            alt=''
                            className='avatar'
                        />
                    </PanelAvatar>
                </PanelContainer>
            </Panel>
        </SideBar>

    );
}

export default ChannelBar;