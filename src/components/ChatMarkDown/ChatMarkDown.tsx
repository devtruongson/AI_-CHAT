import { useAppStore } from '@/stores/appStore';
import { IResponse } from '@/utils/interface';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const { Paragraph } = Typography;

const ChatMarkDown: React.FC<{
    data: Partial<IResponse<any>>;
    toggle?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ data, toggle }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>('');
    const [position, setPosition] = useState<number>(0);
    const { updateDataChatStrem } = useAppStore();

    useEffect(() => {
        if (!data.is_stream) {
            setAnswer(data.data);
            return;
        }
        const intr = setInterval(() => {
            setAnswer(data.data.slice(0, position));
            if (position + 1 > data.data.length) {
                updateDataChatStrem(false);
            } else {
                setPosition(position + 1);
                if (toggle) {
                    toggle((prev) => !prev);
                }
            }
        }, 15);
        return () => {
            clearInterval(intr);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, position]);

    return (
        <div>
            <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
    );
};

export default ChatMarkDown;
