<script lang="ts">
import Vue from 'vue'
import mime from 'mime'
import { Ticket, Reply } from './interfaces'

export default Vue.extend({
  computed: {
    ticket(): Ticket {
      return this.$store.state.tickets.ticket
    },
    replies(): Reply[] {
      if (!this.ticket.replies) return []
      let replies = [...this.ticket.replies.reply]

      replies = replies.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      })

      return replies
    },
    hasReplies(): boolean {
      return this.replies.length > 0
    }
  },
  created() {
    this.getTicket()
  },
  methods: {
    getTicket() {
      const id = this.$route.params.id
      this.$store.dispatch('tickets/getTicket', id)
    },
    closeTicket() {
      const id = this.$route.params.id

      this.$store.dispatch('tickets/closeTicket', id).then(() => {
        this.getTicket()
      })
    },
    getTicketAttachment(
      ticketId: number,
      replyId: string | number,
      attachmentId: number
    ) {
      const params = {
        holder_type: replyId === '0' ? 'ticket' : 'reply',
        holder_id: replyId === '0' ? ticketId : replyId,
        attachmentId
      }

      this.$store
        .dispatch('tickets/getTicketAttachment', params)
        .then((res) => {
          this.downloadTicketAttachment(res)
        })
    },
    downloadTicketAttachment(res: any) {
      const a = document.createElement('a')
      const fileType = mime.getType(res.filename)

      a.href = 'data:' + fileType + ';base64,' + res.data
      a.download = res.filename
      a.click()
    },
    goList() {
      this.$router.push('/tickets')
    },
    goReply() {
      const id = this.$route.params.id
      this.$router.push({ path: `/tickets/${id}/reply` })
    }
  }
})
</script>

<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <i class="far fa-play-circle fa-rotate-180 fa-lg mr-2"></i>
            <h2
              class="d-inline-block text-warning pr-4 mb-0 align-middle border-right"
            >
              MY SUPPORT TICKETS
            </h2>
            <h2 class="d-inline-block pl-4 mb-0 align-middle">
              VIEW TICKET #{{ ticket.tid }}
            </h2>
          </div>
        </div>
      </div>
      <div class="card-body bg-light">
        <div class="row mb-4">
          <div class="col-12">
            <h4>
              45AIR <span v-if="!!ticket.subject">-</span>
              {{ ticket.subject }}
            </h4>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-xl-3 text-nowrap">
            <span class="font-weight-bold pr-2">Submitted:</span>
            {{ ticket.date }}
          </div>
          <div class="col-md-6 col-xl-4">
            <span class="font-weight-bold pr-2">Department:</span>
            {{ ticket.deptname }}
          </div>
          <div class="col-md-6 col-xl-2">
            <span class="font-weight-bold pr-2">Priority:</span>
            {{ ticket.priority }}
          </div>
          <div class="col-md-6 col-xl-3">
            <span class="font-weight-bold pr-2">Status:</span>
            {{ ticket.status }}
          </div>
        </div>

        <hr class="mt-1" />

        <div v-if="hasReplies">
          <div class="row my-4">
            <div class="col-md-3 col-lg-3 col-xl-2">
              <button class="btn btn-info w-100" @click="goList">Back</button>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
              <button class="btn btn-success w-100" @click="goReply">
                Reply
              </button>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
              <button
                class="btn btn-danger w-100"
                :disabled="ticket.status == 'Closed'"
                @click="closeTicket"
              >
                Close
              </button>
            </div>
          </div>

          <div v-for="reply in replies" :key="reply.replyid" class="row">
            <div class="col-12">
              <div class="card">
                <div
                  class="card-header text-white d-flex justify-content-between rounded-top"
                  :class="{
                    'bg-info': !!reply.userid || !!reply.name,
                    'bg-warning': !!reply.admin
                  }"
                >
                  <span v-if="!!reply.admin">{{ reply.admin }} - Staff</span>
                  <span v-else-if="!!reply.userid">
                    {{ reply.name }} - Client
                  </span>
                  <span>{{ reply.date }}</span>
                </div>
                <div class="card-body">
                  <p style="white-space: pre-wrap;">{{ reply.message }}</p>
                </div>
                <div v-if="reply.attachments.length" class="card-body">
                  <p class="mb-1">
                    <strong>
                      {{ `attachments(${reply.attachments.length})` }}
                    </strong>
                  </p>
                  <ul class="list-unstyled pl-2 mb-0">
                    <li
                      v-for="attachment in reply.attachments"
                      :key="attachment.index"
                    >
                      <a
                        href="javascript:;"
                        @click="
                          getTicketAttachment(
                            ticket.ticketid,
                            reply.replyid,
                            attachment.index
                          )
                        "
                      >
                        <i class="far fa-file"></i> {{ attachment.filename }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-2">
            <button class="btn btn-info w-100" @click="goList">Back</button>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
            <button class="btn btn-success w-100" @click="goReply">
              Reply
            </button>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
            <button
              class="btn btn-danger w-100"
              :disabled="ticket.status == 'Closed'"
              @click="closeTicket"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
