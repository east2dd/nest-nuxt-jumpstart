<script>
import Profile from '~/plugins/theme/components/widgets/profile'
import Earning from '~/plugins/theme/components/widgets/earning'
import Stat from '~/plugins/theme/components/widgets/stat'
import Transaction from '~/plugins/theme/components/widgets/transaction'
import Emailsent from '~/plugins/theme/components/widgets/emailsent'

/**
 * Dashboard Component
 */
export default {
  components: { Profile, Stat, Transaction, Earning, Emailsent },
  data() {
    return {
      title: 'Dashboard',
    }
  }
}
</script>

<template>
  <div>
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div
          class="page-title-box d-flex align-items-center justify-content-between"
        >
          <h4 class="mb-0 font-size-18">Dashboard</h4>

          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item active">Welcome to Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
