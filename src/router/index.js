import Vue from 'vue';
import Router from 'vue-router';

//交易指令查询
import TransactionOrderInquiry from '@/components/transactionOrderInquiry/TransactionOrderInquiry';
    //当日指令
    import DayInstruction from '@/components/transactionOrderInquiry/DayInstruction';
    //历史指令
    import HistoricalInstruction from '@/components/transactionOrderInquiry/HistoricalInstruction';
    //执行情况查询
    import ImplementationQuery from '@/components/transactionOrderInquiry/ImplementationQuery';

//账户查询
import QueryAccount from '@/components/queryAccount/QueryAccount';
	//资产查询
	import AssetQuery from '@/components/queryAccount/AssetQuery';
	//成交查询
	import TransactionQuery from '@/components/queryAccount/TransactionQuery';
	//委托查询
	import EntrustQuery from '@/components/queryAccount/EntrustQuery';
	//历史持仓
	import HistoricalPositionQuery from '@/components/queryAccount/HistoricalPositionQuery';
	//收益走势
    import CurveOfRefum from '@/components/queryAccount/CurveOfRefum';
    //逐日费用查询
	import DailyCostInquiries from '@/components/queryAccount/DailyCostInquiries';

//模拟账户
import SimulatedAccount from '@/components/simulatedAccount/SimulatedAccount';
    //账户概要
	import SimulationAccountInformation from '@/components/simulatedAccount/SimulationAccountInformation';
    //成交查询
    import SimulationTransactionQuery from '@/components/simulatedAccount/SimulationTransactionQuery';
    //委托查询
    import SimulationEntrustQuery from '@/components/simulatedAccount/SimulationEntrustQuery';
    //历史持仓
    import SimulationHistoricalPositionQuery from '@/components/simulatedAccount/SimulationHistoricalPositionQuery';
    //收益走势
    import SimulationCurveOfRefum from '@/components/simulatedAccount/SimulationCurveOfRefum';

//账户设置
import AccountSettings from '@/components/accountSettings/AccountSettings';

Vue.use(Router)

export default new Router({
  routes: [
  	//首页
    {
      path: '/',
      redirect: 'transaction-order-inquiry'
    },

    //交易指令查询
    {
    	path: '/transaction-order-inquiry',
    	component: TransactionOrderInquiry,
        redirect: '/transaction-order-inquiry/day-instruction',
        children: [
            //当日指令
            {
                path: 'day-instruction',
                component: DayInstruction
            },

            //历史指令
            {
                path: 'historical-instruction',
                component: HistoricalInstruction
            },

            //执行情况查询
            {
                path: 'implementation-query',
                component: ImplementationQuery
            }
        ]
    },

    //账户查询
    {
    	path: '/query-account',
    	component: QueryAccount, // 注意： 当父路由把第一个子路由当做默认路由时，父路由的component不能省略，同时父路由组件里面必须包含 <router-view></router-view>
    	redirect: '/query-account/asset-query',
    	children: [
    		//资产查询
    		{
    			path: 'asset-query',
    			component: AssetQuery
    		},

    		//成交查询
    		{
    			path: 'transaction-query',
    			component: TransactionQuery
    		},

    		//委托查询
    		{
    			path: 'entrust-query',
    			component: EntrustQuery
    		},

    		// 历史持仓
    		{
    			path: 'historical-position-query',
    			component: HistoricalPositionQuery
    		},
    		// 收益走势
    		{
    			path: 'curve-of-refum',
    			component: CurveOfRefum
    		},
            // 逐日费用查询
            {
                path: 'daily-cost-inquiries',
                component: DailyCostInquiries
            }
    	]	
    },

    //模拟账户
    {
    	path: '/simulated-account',
    	component: SimulatedAccount,
    	redirect: '/simulated-account/simulation-account-information',
    	children: [
    		//账户概要
    		{
    			path: 'simulation-account-information',
    			component: SimulationAccountInformation
    		},
            //成交查询
            {
                path: 'simulation-transaction-query',
                component: SimulationTransactionQuery
            },

            //委托查询
            {
                path: 'simulation-entrust-query',
                component: SimulationEntrustQuery
            },

            // 历史持仓
            {
                path: 'simulation-historical-position-query',
                component: SimulationHistoricalPositionQuery
            },
            // 收益走势
            {
                path: 'simulation-curve-of-refum',
                component: SimulationCurveOfRefum
            }
    	]
    },

    //账户设置
    {
    	path: '/account-settings',
    	component: AccountSettings
    }
  ]
})
