// types.ts
import type {GetProp} from 'antd';
import {Attachments} from "@ant-design/x";

export interface CodeResult {
  taskId: string;
  sessionId: string;
  elapsed: string;
  executeCode: string;
  stdErr?: string;
  images: string[];
}

export interface BubbleDataType {
  session_id: string;
  id?: string;
  content: string;             // 消息内容

  reasoning_content?: string;  // 推理内容
  role: string,
  model?: string;              // 模型名称
  citations?: string[];        // 引用来源
  question_id?: string;        // 问题ID（用户消息）
  answer_id?: string;          // 回答ID（助手消息）
  code_result?: CodeResult;
  code_error?: string[];             // 消息内容
}

export type ConversationItem = {
  key: string;
  label: string;
  group: string;
};
export type AttachmentFile = GetProp<typeof Attachments, 'items'>[number];