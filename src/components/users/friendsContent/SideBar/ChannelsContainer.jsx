import React from "react";
import styled from "styled-components";

import { FaUserFriends, FaInbox } from "react-icons/fa";

const ChannelsContainer_ = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
`;

const TopContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`;

const LinkContainer = styled.div`
    margin: 1rem 1rem 0rem 0.5rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    background-color: var(--color-hover-grey);
    transition: 0.2s ease 0s;
    &:hover {
        background-color: var(--color-grey);
    }
`;

const LinkFriendIcon = styled(FaUserFriends)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
`;

const LinkInboxIcon = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
`;

const LinkText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
`;

export default function ChannelsContainer() {
    return (
        <ChannelsContainer_>
            <TopContent>
                <LinkContainer>
                    <LinkFriendIcon />
                    <LinkText>Friends</LinkText>
                </LinkContainer>
                <LinkContainer>
                    <LinkInboxIcon
                        viewBox="0 0 24 24"
                        version="1.1"
                    >
                        <title>inbox_fill</title>
                        <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                                id="File"
                                transform="translate(-624.000000, -48.000000)"
                            >
                                <g
                                    id="inbox_fill"
                                    transform="translate(624.000000, 48.000000)"
                                >
                                    <path
                                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                        fillRule="nonzero"
                                    ></path>
                                    <path
                                        d="M5.82918,5.10557 C6.16796,4.428 6.86049,4 7.61803,4 L16.382,4 C17.1395,4 17.832,4.428 18.1708,5.10557 L21.6833,12.1305 C21.8916,12.5471 22,13.0064 22,13.4721 L22,19 C22,20.1046 21.1046,21 20,21 L4,21 C2.89543,21 2,20.1046 2,19 L2,13.4721 C2,13.0064 2.10844,12.5471 2.31672,12.1305 L5.82918,5.10557 Z M16.382,6 L7.61803,6 L4.12,13 L7.5,13 C8.32843,13 9,13.6716 9,14.5 L9,15.5 C9,15.7761 9.22386,16 9.5,16 L14.5,16 C14.7761,16 15,15.7761 15,15.5 L15,14.5 C15,13.6716 15.6716,13 16.5,13 L19.88,13 L16.382,6 Z"
                                        fill=" var(--color-full-white)"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </LinkInboxIcon>
                    <LinkText>Inbox</LinkText>
                </LinkContainer>
            </TopContent>
        </ChannelsContainer_>
    );
}
