export interface Ticket {
  ticketid: number
  tid: string
  deptid: number
  deptname: string
  userid: number
  contactid: number
  name: string
  email: string
  date: string
  subject: string
  status: string
  priority: string
  admin: string
  replies: {
    reply: Reply[]
  }
}

export interface Reply {
  replyid: string
  userid: number
  contactid: number
  name: string
  email: string
  date: string
  message: string
  attachment: string
  attachments: []
  // eslint-disable-next-line camelcase
  attachments_removed: boolean
  admin: string
}
