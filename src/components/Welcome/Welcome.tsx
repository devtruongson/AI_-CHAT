'use client';
import { useAppStore } from '@/stores/appStore';
import { SettingOutlined } from '@ant-design/icons';
import { Modal, Space, Switch } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { IconMessenger, IconPhone, IconZalo } from '../Icons/icon';

export default function Welcome() {
    const { is_welcome, updateIsWelcome } = useAppStore();

    const handleClickStartChat = () => {
        updateIsWelcome(!is_welcome);
    };

    return (
        <div className="relative">
            <TopChatHeading />
            <div
                style={{
                    border: '1px solid #eee',
                }}
                className="bg-[#fff] w-[90%] mx-auto mt-[-25px] relative z-[888] rounded-[6px] px-[10px] py-[20px] shadow-md flex flex-col items-center gap-[10px]"
            >
                <p>Câu hỏi của bạn sẽ được Robox trả lời ngay 🔥 cùng bắt đầu ngay</p>
                <button
                    onClick={handleClickStartChat}
                    className="bg-[#634bea] text-[#fff] px-4 py-1 rounded-sm hover:opacity-[0.9]"
                >
                    {is_welcome ? 'Tiếp Tục Chat' : 'Bắt Đầu Chat'}
                </button>
            </div>
            <div
                className="bg-[#fff] w-[90%] mx-auto mt-[20px] border-cyan-200 rounded-[6px] px-[10px] py-[20px]"
                style={{
                    border: '1px solid #eee',
                }}
            >
                <h3 className="font-[600] text-[18px] mb-3">Bạn cũng có thể liên hệ qua</h3>
                <a
                    href=""
                    target="_blank"
                    className="mx-auto mb-3 flex justify-between text-current items-center pr-2 rounded-sm overflow-hidden px-[6px] py-[8px] hover:bg-[rgba(0,0,0,0.05)]"
                    style={{
                        border: '1px solid #ccc',
                    }}
                >
                    <div className="inline-flex items-center gap-[6px]">
                        <IconZalo /> <span>Liên hệ qua zalo</span>
                    </div>
                    <i className="bi bi-arrow-right"></i>
                </a>
                <a
                    href=""
                    target="_blank"
                    className="mx-auto mb-3 flex justify-between text-current items-center pr-2 rounded-sm overflow-hidden px-[6px] py-[8px] hover:bg-[rgba(0,0,0,0.05)]"
                    style={{
                        border: '1px solid #ccc',
                    }}
                >
                    <div className="inline-flex items-center gap-[6px]">
                        <IconMessenger /> <span>Liên hệ qua messenger</span>
                    </div>
                    <i className="bi bi-arrow-right"></i>
                </a>
                <a
                    href=""
                    target="_blank"
                    className="mx-auto mb-3 flex justify-between text-current items-center pr-2 rounded-sm overflow-hidden px-[6px] py-[8px] hover:bg-[rgba(0,0,0,0.05)]"
                    style={{
                        border: '1px solid #ccc',
                    }}
                >
                    <div className="inline-flex items-center gap-[6px]">
                        <IconPhone /> <span>Liên hệ qua điện thoại của chúng tôi</span>
                    </div>
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export const TopChatHeading: React.FC<{
    height?: number;
    text?: string;
    is_show_setting?: boolean;
    dataMute?: {
        isMute: boolean;
        setIsMute: React.Dispatch<React.SetStateAction<boolean>>;
    };
}> = ({
    height = 150,
    text = 'AI rất vui vì được hỗ trợ các bạn, hãy ấn bắt đầu ngay ở dưới.',
    is_show_setting = false,
    dataMute,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { is_robox, updateChangeRobox } = useAppStore();

    return (
        <div className={`h-[${height}px] w-[100%] bg-[#5644b7] py-[12px] pb-[20px] relative`}>
            <Space className="absolute right-[10px] cursor-pointer">
                {is_show_setting && (
                    <>
                        <span className="text-[12px] mr-2 opacity-[0.7]">
                            Author by <a href="https://github.com/trung0501" target="_blank">Trung Nguyễn</a>
                        </span>
                        <SettingOutlined
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            className="bg-[#fff] p-1 rounded-[50%]"
                        />
                    </>
                )}
            </Space>
            <div className="h-[100%] px-[20px]">
                <div className="flex gap-[6px] items-center">
                    <Image
                        src="/shutterstock_725383498-1.png"
                        alt="Hình Ảnh AI"
                        width={100}
                        height={100}
                        className="object-contain w-[60px] h-[60px]"
                    />
                    <span className="text-[#fff] font-[600]">
                        {is_robox ? 'Robox Vinfast' : 'VinfastGPT'} xin chào 👋
                    </span>
                </div>
                <div>
                    <h2 className="italic text-[#fff]">
                        <strong>Robox</strong> {text}
                    </h2>
                </div>
            </div>
            <Modal
                title="Thiết lập"
                open={isOpen}
                onCancel={() => {
                    setIsOpen(false);
                }}
                onOk={() => {
                    setIsOpen(false);
                }}
            >
                <Space>
                    <Space>
                        <strong>Tắt tiếng</strong>
                        <Switch
                            checked={dataMute?.isMute}
                            onChange={() => {
                                dataMute?.setIsMute(true);
                            }}
                        />
                    </Space>
                    <Space>
                        <strong>Mở tiếng</strong>
                        <Switch
                            checked={!dataMute?.isMute}
                            onChange={() => {
                                dataMute?.setIsMute(false);
                            }}
                        />
                    </Space>
                </Space>
            </Modal>
        </div>
    );
};
