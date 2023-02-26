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
    /* width: 240px; */
    
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
    height: 39px;
`;

const IconAvatar = styled.div`
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    outline: 0;

`;

const MaskIcon = styled.svg`
    width: 40px;
    position: absolute;
    pointer-events: none;
    display: block;
    width: auto;
`;

const NameTag = styled.div`
    flex-gow: 1;
    margin-right: 8px;
    min-width: 0;
    cursor: pointer;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-top: 4px; 
`;

const UsernameDiv = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    overflow: hidden;

`;

const Username = styled.div`
    line-height: 18px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;    
`;

const Tag = styled.div`
    font-size: 12px;
    line-height: 13px;
    font-weight: 500;
    color: #b9bbbe;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;





const ChannelBar = () => {
    return (
        <SideBar>
            <PrivateChannels>
                
            </PrivateChannels>
            <Panel>
                <PanelContainer>
                    <PanelAvatar>
                        <IconAvatar>
                            <MaskIcon viewBox="0 0 40 40">
                                <path d="M20,0 C9.058,0 0,9.058 0,20 C0,30.942 9.058,40 20,40 C30.942,40 40,30.942 40,20 C40,9.058 30.942,0 20,0 Z M20,36 C11.163,36 4,28.837 4,20 C4,11.163 11.163,4 20,4 C28.837,4 36,11.163 36,20 C36,28.837 28.837,36 20,36 Z"></path>

                            </MaskIcon>
                        </IconAvatar>
                        <NameTag>
                            <UsernameDiv>
                                <Username>ernicani</Username>
                            </UsernameDiv>
                            <Tag>#0001</Tag>
                        </NameTag>
                    </PanelAvatar>
                    
                </PanelContainer>
            </Panel>
        </SideBar>

    );
}

export default ChannelBar;