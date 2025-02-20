/* eslint-disable @next/next/no-img-element */
import { IMessageUser, IResponse } from '@/utils/interface';
import { Typography } from 'antd';
import Image from 'next/image';
import React from 'react';
import ChatMarkDown from '../ChatMarkDown/ChatMarkDown';

const { Paragraph, Text } = Typography;

const ChatItem: React.FC<{
    data: IResponse<any>;
}> = ({ data }) => {
    if (!data.is_ai) {
        return (
            <div className="mb-3">
                <ChatItemForUser data={data} />
            </div>
        );
    }
    return (
        <div className="mb-3">
            <ChatItemForBot data={data} is_null_result={data.data ? false : true} />
        </div>
    );
};

export default ChatItem;

function ChatItemForBot({
    data,
    is_null_result = false,
    toggle,
}: {
    data: Partial<IResponse<any>>;
    is_null_result?: boolean;
    toggle?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div className="flex mb-4  justify-start custom-gap custom-max-width" style={{ maxWidth: '85%', gap: '10px' }}>
            <img
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '50%',
                    height: '30px',
                    width: '30px',
                    objectFit: 'cover',
                    flexShrink: 0,
                }}
                src="/robox.png"
                alt="Hình ảnh AI"
            />
            <div
                className="rounded shadow "
                style={{
                    background: '#fff',
                    padding: '8px 12px 4px',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                    overflowWrap: 'break-word',
                }}
            >
                {!is_null_result ? (
                    <>{data.is_mark_down && <ChatMarkDown toggle={toggle} data={data} />}</>
                ) : (
                    <p>Bot xin lỗi vì chưa thể hiểu ý của bạn</p>
                )}
            </div>
        </div>
    );
}

function ChatItemForUser({ data }: { data: Partial<IMessageUser> }) {
    return (
        <div>
            <div
                className="flex mb-4 ms-auto justify-end custom-gap custom-max-width"
                style={{ gap: '10px', maxWidth: '85%' }}
            >
                <div
                    className="bg-white rounded shadow custom-padding"
                    style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '4px' }}
                >
                    <p className="text-justify">
                        <Paragraph copyable>{data.data}</Paragraph>
                    </p>
                </div>
                <img
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '50%',
                        height: '30px',
                        width: '30px',
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                    src="/png-transparent-avatar-boy-man-avatar-vol-1-icon.png"
                    alt="Hình ảnh"
                />
            </div>
        </div>
    );
}

export const HelloUser: React.FC<{ setQuestionSuggest: React.Dispatch<React.SetStateAction<string>> }> = ({
    setQuestionSuggest,
}) => {
    return (
        <div className="flex gap-[10px] mb-4 max-w-[85%]">
            <Image
                className="flex-shrink-0 h-[30px] w-[30px] object-cover"
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '50%',
                }}
                width={30}
                height={30}
                src="/robox.png"
                alt="Hình ảnh AI"
            />
            <div className="bg-[#fff] px-[12px] py-[8px] roundemd shadow-md">
                <p className="text-justify">
                    <span className="text-[15px]">
                        Xin chào Anh/Chị. Em là Robox, trợ lý ảo của vinfast. Em có thể hỗ trợ Anh/Chị giải đáp một số
                        thắc mắc
                    </span>
                    <ul
                        style={{
                            listStyle: 'disc',
                            marginLeft: 40,
                            marginTop: 6,
                        }}
                    >
                        <li
                            onClick={() => setQuestionSuggest('Vinfast là gì?')}
                            className="text-[#6565cf] cursor-pointer hover:text-[#ee4d2d]"
                        >
                            Vinfast là gì?
                        </li>
                        <li
                            onClick={() => setQuestionSuggest('Vinfast có mặt ở bao nhiêu quốc gia?')}
                            className="text-[#45457a] cursor-pointer hover:text-[#ee4d2d]"
                        >
                            Vinfast có mặt ở bao nhiêu quốc gia?
                        </li>
                        <li
                            onClick={() => setQuestionSuggest('Vinfast có những dòng xe nào?')}
                            className="text-[#6969b1] cursor-pointer hover:text-[#ee4d2d]"
                        >
                            Vinfast có những dòng xe nào?
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
};
