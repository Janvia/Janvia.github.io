/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","7e61d0b403218e2227b4e96e069a3a01"],["/2019/01/02/Anconda常用命令总结/index.html","9269cfff14804079206063eae55353fd"],["/2019/01/02/句型/index.html","09b8579391bf1874b13f7ac59459a3d7"],["/2019/01/02/日语助词/index.html","af628ba3ebb44d3a77c8fe90a81b2c2d"],["/2019/01/03/on-my-zsh/index.html","399aaa3880ece1409706ed8111ddd98e"],["/2019/01/04/《当我遇见一个人》摘录/index.html","9bc94fd8a6a8b7dd0b012f61e0f8bc6b"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","ef42e66dc0559e868fb550fecb1d6204"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","c59c85180e372f57c344cbb2669c4abd"],["/2019/01/04/经济学笔记/index.html","ec348eb0a730901d3ea91bab84fdd488"],["/2019/01/04/语法总结（5-15）/index.html","40fcc087acdd7788f9e98604a67a342c"],["/2019/01/05/linux常用命令/index.html","6ecbb42c9a55cd9a0feb092d50a8825b"],["/2019/01/06/敬语/index.html","c7bbaf791f85a3606d2f08a3ba43b33e"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","dd82f8d237578392490d43dc5ad83206"],["/2019/01/07/cuda 手动配置/index.html","cab8af72f1d536a9c6ec2303144fd93d"],["/2019/01/07/docker-ldap-mysql/index.html","f4677ab8a2ae8581134f0c7321c1697c"],["/2019/01/07/docker安装/index.html","803dfe19bfae6095d3c7c2d61f45b375"],["/2019/01/07/docker容器挂载硬盘/index.html","9612d2c29e2891da08a9fa8b470d27df"],["/2019/01/07/github上传代码/index.html","8ce01383eb7217ed4382a7acda95ace2"],["/2019/01/07/kaldi 安装/index.html","0d1ae9ce1f80dac4895601c86075ea44"],["/2019/01/07/linux常用工具/index.html","089410dc620391686b9544265ce468d4"],["/2019/01/07/opencv/index.html","715289cfd14fc3f3963cf4e7b5d7e8b8"],["/2019/01/07/ssh 远程连接docker/index.html","d642473fa0381e83365fb9ddcb401638"],["/2019/01/07/导出/index.html","42003978f2c8e842b047366a23f7db87"],["/2019/01/07/换源/index.html","82ea1e3754f5ee696aa9f7ff184f6fad"],["/2019/01/09/markdown/index.html","f4328c472f042d2deb7ae3033ad45e76"],["/2019/01/09/opencv图像美化/index.html","54a8ca2833d4b1266bb5baed40699be9"],["/2019/01/11/19单元语法/index.html","fef1d6d4be147a2e1472034912185bb1"],["/2019/01/11/20单元语法/index.html","25012c753cd6ad5dd11d12e8ad26f25b"],["/2019/01/11/opencv-图片几何变换/index.html","b9cc1e3660f452a952baf7ae16790624"],["/2019/01/11/opencv-图片处理及绘图/index.html","1b119df760571dea347eeef9e5523906"],["/2019/01/11/wine安装qq/index.html","3bd66dbaefef587d18ceb753d8e2b3a3"],["/2019/01/12/tensorflow-可视化/index.html","80f58e9895c40274f7cd0487448ecbff"],["/2019/01/12/tensorflow-基础语法/index.html","40000d7c361b7420f28a1d022eb19dd9"],["/2019/01/13/RNN/index.html","4206f77a7d0aa42e048beafc27d5b30e"],["/2019/01/13/keras实现CNN/index.html","94df97e4d2c3d73d1fe5d07b62b1ed53"],["/2019/01/13/卷积神经网络实现/index.html","2ddd03a12b650cc85bf1bccf71ba3315"],["/2019/01/13/循环神经网络RNN-写诗/index.html","53c8f13025696c8b416ad91adca58635"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","b04628ef70a9f079cabcca3c342fd010"],["/2019/01/14/反向传播/index.html","aa7abeb295bbf1597a2c6887b9ea59b4"],["/2019/01/14/图床/index.html","23b3e6b56ea9f72a639b33c985c398e8"],["/2019/01/14/感知器与激活函数/index.html","7c840478a84787a0ab30dcd59a7d3506"],["/2019/01/15/PIL简单应用/index.html","e5ffb02918cbb88473016f4acc2ce7d5"],["/2019/01/15/卷积神经网络理论/index.html","c2d6c3bff1704a6c5527ee3bba0d2b22"],["/2019/01/15/图片分类之pca-svc/index.html","6fa808160bcb15edbb805c596c7984be"],["/2019/01/15/强化学习基础/index.html","f9dd693f04e999426b806e0e670649ec"],["/2019/01/15/经典神经网络/index.html","b223e659a20f5e5351e4d029284c7fe3"],["/2019/01/16/DQN/index.html","ad9e25c999b399c0e23c359aa6e09f70"],["/2019/01/16/TCP传输图片/index.html","5bf51b55858abad3562a46d88058fbf6"],["/2019/01/16/时序差分学习/index.html","880d35038b95d84b1847cf549f0b2369"],["/2019/01/16/蒙特卡洛方法/index.html","9a20e8228c4da4f829eff4dd0d6b8dcf"],["/2019/01/17/Double-QDN/index.html","28063b556f3aa100dc1feff8c31620be"],["/2019/01/17/RNN理论/index.html","f8e8c73972cbaa589fa80f9291a78547"],["/2019/01/17/梯度下降/index.html","9d972541a3fdd75aab3da4c8fb92b8ad"],["/2019/01/18/PG和TD3/index.html","8f329c4bba4f5d79c6cdef068f7c8923"],["/2019/01/20/21单元语法/index.html","15274c56c49b06d226a12794017022b8"],["/2019/01/20/GAN理论/index.html","98867df29f0994f28f277b8158dbddd3"],["/2019/01/20/PG3和IRL/index.html","a6c17bcfa839a7e59a7fd828e4d01052"],["/2019/01/20/数据集/index.html","547a611e886a7fe21b2c1ba3661c9c13"],["/2019/01/21/DCGAN/index.html","4b4da2c9fb59232bac55e4c6ef944881"],["/2019/01/21/LSTM/index.html","6748a5938e4191301032feeeafe94046"],["/2019/01/21/点击预估/index.html","a9ee63accf90b467aeef65d2c50cbaff"],["/2019/01/22/SVD分解/index.html","0120d68643bb9dade0e16e3c3a789454"],["/2019/01/22/SVM/index.html","e4e14c1d127b983f3895ef9f8c849db6"],["/2019/01/22/机器学习简介/index.html","6de705e2f50af9f1cb33c6635d8b5871"],["/2019/01/22/线性回归/index.html","d49b266f3056cb0b665cd28a6ff13c60"],["/2019/01/22/逻辑回归/index.html","41cc00219bdcd0a5a7d2b120ee2a3ea4"],["/2019/01/23/numpy/index.html","e5bcdb87ae549c027ffbfb0165c0d6e4"],["/2019/01/23/决策树与随机森林/index.html","22a1da7d4ba8e07ef81e86814f46c47c"],["/2019/01/23/聚类/index.html","a25a8283da670271521394812c0b1d70"],["/2019/01/24/matplotlib/index.html","c8d76d55dddbb9f657a4236ff46fe396"],["/2019/01/25/pandas/index.html","86ae2c556fbf2e7ceeeb99c25511f80b"],["/2019/01/25/语义分割/index.html","5c105a9b2ef040f29a563a9bf54141c6"],["/2019/01/27/22单元语法/index.html","0625ec6aa2cb5fe90f32ff47999b7e30"],["/2019/01/27/SVM案例/index.html","c15b74e9aac23e1e7a9cd8cb819bfbbd"],["/2019/01/28/requests库及爬虫案例/index.html","a886f9731dc96d45fa54a80894561227"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","6faf44db2154636b67e9dc3b70254feb"],["/2019/01/28/异常/index.html","90ca257e106c9982e00651a2fd826c07"],["/2019/01/28/描述器和装饰器/index.html","9c1d12d99852f77daecd703307551e9e"],["/2019/01/28/文件/index.html","1a16d88906f1ed3b23ff7539364d365a"],["/2019/01/28/正则/index.html","6a1576b00bd305e2ce92aa76dbb84de3"],["/2019/01/29/函数基础和函数参数/index.html","b70a5f734bed5754df098b52d23ee18f"],["/2019/01/29/多继承和魔方方法/index.html","b269f27cf6722edecd2c3e33b60e266f"],["/2019/01/29/类定义、属性和继承/index.html","b00694a073b72d4a47c97786e76953d6"],["/2019/02/27/23单元/index.html","12170b7807dd3a2acab77edf71b97c3a"],["/2019/03/12/hexo系统重装恢复/index.html","c79ace9687e0ee0be7fe3fa1c53c300b"],["/2019/03/13/24单元/index.html","f5bc42eeaaf6d0bb94cc179d46b16efc"],["/2019/03/19/25单元/index.html","e8178efd9421454ecdd7ca12b917ed4b"],["/2019/03/26/26单元/index.html","06be537145a0ef4c2ae96dd77396d6ab"],["/2019/04/14/27单元/index.html","f3682cce1e987d00efe994750526edb4"],["/2019/05/01/28单元/index.html","ffa2e7fb90ce495ca9d62614f6efcaf6"],["/2019/05/02/29单元/index.html","de6a634cb01091252fc4526ffa82f00a"],["/2019/05/12/30单元/index.html","aa46d8a187ea57e0ab4cbfed45052c54"],["/2019/06/03/jni/index.html","cb19fb01101c1173ae567c201132bd7a"],["/2019/06/07/JNA/index.html","ec13bf62129777d723454e4afe7aea83"],["/2022/08/07/R配置jupyter/index.html","85d737ae5bdd379fc1941513a1d4bed0"],["/2022/08/18/FFmpeg常用命令/index.html","129978124d425e2bbf7e2c8937dbd071"],["/2022/08/18/linux系统代理/index.html","25ae0f390dfe60882670f1f8bbc39535"],["/2022/08/18/matplotlib补充/index.html","355ab99c013971fffcbc49e12421e6dd"],["/2022/08/18/常用命令/index.html","4c9d0cc32e3c16a5df4f1aa9eeb035e4"],["/2022/08/20/sacred/index.html","161ce995184c49cdf1a217558829c6b0"],["/2022/08/20/wsl/index.html","c7b75c1a49d247cd96e4270a5af183d5"],["/2022/08/20/双系统安装/index.html","beb63a0d934b5c7e1766ff8e2c194ee0"],["/2023/06/28/source/index.html","7cb53d0999f5fe8c032fdf392831193b"],["/archives/2018/12/index.html","37d09defa9021386a1cf427fd3ba3717"],["/archives/2018/index.html","a7e5431ac7f9d5544e8a12feb53d1ce8"],["/archives/2019/01/index.html","c24f6bf0e5753aed72c1eef799a51d41"],["/archives/2019/01/page/2/index.html","f026185984231ec706f177a19316bdb4"],["/archives/2019/01/page/3/index.html","6c86fc64f36824126f55dc3f4d255d6f"],["/archives/2019/01/page/4/index.html","e5999f839912cbd5924ccbfbbab22c41"],["/archives/2019/01/page/5/index.html","0ce3b4846d16197d24f77366dde2d779"],["/archives/2019/01/page/6/index.html","5bdee993f86ef41a3ca3e178d4f041d8"],["/archives/2019/01/page/7/index.html","6b6ce51b10960ff3e0d7d623817e243d"],["/archives/2019/01/page/8/index.html","9324e0be4cad99fe59309b913e9a8e7b"],["/archives/2019/01/page/9/index.html","0330b30a036bccbe5b453a6062063b91"],["/archives/2019/02/index.html","996a8f1eccfb3d51c572dfda6eb6e188"],["/archives/2019/03/index.html","a646a9c7206df07e819f72a633d2aaf6"],["/archives/2019/04/index.html","6ccea22599da4e0163701aad35e93caf"],["/archives/2019/05/index.html","afee1ce52c5886314373970761b7b074"],["/archives/2019/06/index.html","26ca1be47c48c4f9a7ed21889f127f0a"],["/archives/2019/index.html","67dabb2c31db79f044e02ec56f06b608"],["/archives/2019/page/10/index.html","c4367dcd57f1e685516d0125a11683a0"],["/archives/2019/page/2/index.html","2444dbff6492f9e52c62daceb7ba6b76"],["/archives/2019/page/3/index.html","50e7029a3843be31d09cec3781eca709"],["/archives/2019/page/4/index.html","bb608f1b8fd828346f36da051e47711a"],["/archives/2019/page/5/index.html","b148e34c5b52a0ec20c679eef10a321d"],["/archives/2019/page/6/index.html","1f9ebe762ad21f3439350ec92f56344a"],["/archives/2019/page/7/index.html","4e10ecd8132167acb465bc712fcc9d2c"],["/archives/2019/page/8/index.html","b45434ceaf655920e8dd0de008c701ff"],["/archives/2019/page/9/index.html","4a9221238e96f20c9d14587e3b107ef1"],["/archives/2022/08/index.html","8a52b83e555d217d9eeb251799fcab27"],["/archives/2022/index.html","fc93d37c31b01fa0a5bd75f56509a3f7"],["/archives/2023/06/index.html","ac2b13b0b8c5530c02e7819a308a95a1"],["/archives/2023/index.html","dd235aa4ba0dfa4036a7b7adccd60503"],["/archives/index.html","287ff0352bdf855de462384c3d6cb07d"],["/archives/page/10/index.html","90232a024cf0530982e508948585385f"],["/archives/page/11/index.html","4b9be5abed1f5c5174e3b81dbf1be931"],["/archives/page/2/index.html","9fb09ab1456b9148f719fbdf896ad57e"],["/archives/page/3/index.html","5fa5b6136a3fe5a084b4a718be462eb3"],["/archives/page/4/index.html","fc683edefc742888eab672bcf2d98f0d"],["/archives/page/5/index.html","6981354efeeb604b6eff717d1cf9d90a"],["/archives/page/6/index.html","ee4bead7214834cc4e88b535b27865cc"],["/archives/page/7/index.html","44c634296ccbfe100c1ea6811e58a32b"],["/archives/page/8/index.html","0ab71a5113ae9847da85964d0cc0297f"],["/archives/page/9/index.html","6b73cf8f3609b52e7ec28a38fcb8a940"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","5fe42015f69bd0f98c99d568b4780a19"],["/categories/dxz/index.html","41e5bdcb83401effb6ec1ff200414517"],["/categories/index.html","8badb0d1d51f57698b486b0c6feb3000"],["/categories/java调用C/index.html","de8223e7138b98ef3ed46025f045e28c"],["/categories/linux/index.html","bd8727a258ff998b67753e8906274a46"],["/categories/linux/page/2/index.html","5d18defbaddc64cc03d98d7474512e13"],["/categories/python/index.html","e79e3f449ad94d13e627d3ec530f0359"],["/categories/tensorflow/index.html","914929917f29b9881f706006896e0f6d"],["/categories/优化算法/index.html","912154741b50f131c451d674f371f056"],["/categories/图片分类/index.html","7b198ed9b50182fc3b8f7a108e216a9d"],["/categories/工具/index.html","ff6b08a79132977126f7603cb671bf03"],["/categories/工具/page/2/index.html","a5a3c09b92e682fc502ddfefdc6ac7a8"],["/categories/强化学习/index.html","b4340622ce11905a8656bea0c0e8657a"],["/categories/数据集/index.html","1fb9603046f8413a437ad332e180a05b"],["/categories/日语/index.html","4bd3506609e8952be3d56edfba988ff2"],["/categories/日语/page/2/index.html","3aff1691ded9eb3624c79f7b187aab4f"],["/categories/机器学习/index.html","914559930c8e64ae41807bdd02714ef6"],["/categories/深度学习/index.html","580131d1765bcadb404a87e6be1b456b"],["/categories/深度学习/page/2/index.html","da3ad0e54168bd46ae27cfb6bfbde195"],["/categories/计算机视觉/index.html","3529d5e7ee931122470c867c1915304b"],["/categories/读书笔记/index.html","5124b1b31264e7c0b1da35ba095fb4e2"],["/css/main.css","fca75a71b1cd8ea32d04ef4806b64593"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","056c76a47faab4b7840b7fe1502b5d1c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","789b5964fd38615795d4dc95a4f8beee"],["/page/11/index.html","c35a7893a362dfc1e973fb597a232dee"],["/page/2/index.html","49efc99a405c9c7dd75c5cd0aa29021c"],["/page/3/index.html","73a9643a9fa5fefd4555947a8338cad7"],["/page/4/index.html","54272a250aa24d8a92d3019dbf8cbbd2"],["/page/5/index.html","ec9460ade259db5d9d48509760623271"],["/page/6/index.html","8d276671e303f3ca82c3a19002e02460"],["/page/7/index.html","fdfc00f7b7a01db1fe2c530fdfacfe33"],["/page/8/index.html","1e9bd007246e6b4cef621ba627a1e15a"],["/page/9/index.html","2fce2a6b0f126a3ebb4da3b8fafa8781"],["/sw-register.js","bbcd44fabf35ae21d3f33070a396bcef"],["/tags/AlexNet/index.html","ad28cf02777e6c53d2dd8c4785cc1096"],["/tags/CNN/index.html","8ef05afd5d00cfdf702e7cdce9ae1953"],["/tags/DCGAN/index.html","f62498f1e442045abda42919dc797fe4"],["/tags/DDPG/index.html","3c915e50dfeb7096b539813d3915e92f"],["/tags/DDQN/index.html","1c627c719ebb1ab0bade0c25b160dea5"],["/tags/DQN/index.html","0708e7f0d22be9bc083c19e2c95e4008"],["/tags/GAN/index.html","1f5c7d85d8b6b1a6cd2e1812d7bd4581"],["/tags/IRL/index.html","e0db290efc32249c9e20682f01cd1819"],["/tags/LSTM/index.html","9053f91218889e789dac0e7d31d6c3e6"],["/tags/LeNet/index.html","08d11a9ec884742c5ba58e08fd451beb"],["/tags/MC/index.html","9cc19c94df8c7f9a787a3dfd2e4df734"],["/tags/PCA/index.html","ee9a72496d4e42dff96b05e7e76a5208"],["/tags/PG/index.html","64f9ab3df268d119b48fb9d7a44cd404"],["/tags/PG3/index.html","1e43f73284840832389649b7b1990178"],["/tags/PIL/index.html","f84903b01e677c0830c4df96f84620a8"],["/tags/R/index.html","aca7ab637158998425df74020db94d8d"],["/tags/RNN/index.html","7ecaee68533f88f481cc718d7da69781"],["/tags/SVC/index.html","69a84199916d4d597ab654c5911c9c13"],["/tags/SVD/index.html","4dbd7da7728d9ee2185c0c329d91a3b9"],["/tags/SVM/index.html","81fd0b23790a5b58a6de9f1d4a7b1380"],["/tags/TCP/index.html","80fa2360bd185fc4f4d6bd4c575ace11"],["/tags/TD/index.html","abfa69ff2290b3388a139a351593319d"],["/tags/TD3/index.html","db7324af7ba923edaa0beec0600522d1"],["/tags/VGG/index.html","d1d556a368199cde5909e3cf5c0a85cf"],["/tags/amd配置/index.html","ce5c0b297c51a52cbbba9cf3afb76114"],["/tags/anconda/index.html","39e36d827d1dd21c708adee374a8781d"],["/tags/conda常用命令/index.html","29c1294829e92a16fc5286988e05b729"],["/tags/cuda配置/index.html","b989ba329438937688c9ca4b687e3564"],["/tags/ffmpeg/index.html","04e2d40aea7034d68abf7db351d63547"],["/tags/github上传代码/index.html","c84c22759e3df8db815b9628efea2cd0"],["/tags/hexo/index.html","7e0ab15956b947fccad8c989659156ec"],["/tags/index.html","490f663550333dd2419f8cba7c07dadd"],["/tags/java调用C/index.html","3cf2c92a3dc62ea47aca7edce78aaa15"],["/tags/kaldi/index.html","bb33227df23eff77eebbf918783fb4fd"],["/tags/linux命令/index.html","39b92e4926718cadd52dfbb837847f95"],["/tags/markdown/index.html","bb25800324c07e668bfb15e2e48b83b5"],["/tags/matplotlib/index.html","4177ed94fb5897c1a3670b3e68ce2945"],["/tags/numpy/index.html","36f30f3d42ba193af01766cb0a003408"],["/tags/opencv/index.html","76d13ffc7807095e70092fed1b77b281"],["/tags/pandas/index.html","2ff6704f0a8f0fda443f2c31206fc907"],["/tags/qq/index.html","937bf07cbf504f4171802de8e46404e5"],["/tags/requests库/index.html","7cf4a5f25997a027813c033c441413e7"],["/tags/sacred/index.html","a372484ed9c665373d4d41c101cdc148"],["/tags/ssh-远程连接docker/index.html","ce213f19677e46a6899b1adc828984e5"],["/tags/wsl/index.html","e2277ece9572f205cd3cf4bf6e90a799"],["/tags/zsh/index.html","7c572df0ef75797332882fa107e4a9ac"],["/tags/代理/index.html","3f12221e780aeb05a8d9e38d0f3f8ce9"],["/tags/决策树/index.html","0114a7b8a92030d0707a93be6d8ace17"],["/tags/函数/index.html","10c517f38fe886c3bd895510b87eb0be"],["/tags/列表推导式/index.html","005342c6a4faf121a8b840b26b3267f2"],["/tags/助词/index.html","b3f9350eabc1e4b4df02f0fa6c3e8992"],["/tags/包/index.html","cfab69c274d1c68b3786ccc54935ee14"],["/tags/卷积神经网络/index.html","e78a55c6ac153b812f95f1a3be6d4aeb"],["/tags/双系统安装/index.html","a0737841481758b3b2a035b7fc3cc30e"],["/tags/反向传播/index.html","7b77f7bcaeec39785234d6cc234fad06"],["/tags/句型/index.html","7b215250d0b5cb19cde623a818404a73"],["/tags/可视化/index.html","9b06fecc5b47148403cfc6ac60157d9b"],["/tags/哲学/index.html","33a33630f236e9604caee071a140c936"],["/tags/图像美化/index.html","0678d8a10ac3f6b604052eaefbaea1c7"],["/tags/图床/index.html","c5a12b22ac2e21709b8ec975e9ce2cc4"],["/tags/多继承/index.html","d5863a60bfabba12b9cbdd8b1cc8a444"],["/tags/工具/index.html","94f880b27cc2eb563c14f0cf7872421a"],["/tags/异常/index.html","5e02a6cfe9a446f6f36653431afb517b"],["/tags/强化学习/index.html","97afe428a97374782b2b182345091c57"],["/tags/心理学/index.html","2df21680a27463f351bdc84a9c104adf"],["/tags/感知器/index.html","3c7aa2256716dfc0aeff1764855dd511"],["/tags/换源/index.html","caeaf0d97b1a955cf565f6f9d5f38260"],["/tags/描述器/index.html","f8dcc5a07013ca2a71b381b8171cc1cd"],["/tags/敬语/index.html","d54a8b6cee715e1e8d9dcf67584ba08d"],["/tags/数据集/index.html","94a78018a6bd7b4d1df861cccb062969"],["/tags/文件/index.html","fd4b2285e1e12f5a466ba836fea41b0e"],["/tags/机器学习/index.html","bfd660edd2c1fdd943a7fd9d2e253abf"],["/tags/梯度下降/index.html","3be54a99f24f68cce1a3a4c014749d6d"],["/tags/模块/index.html","263bcde3ef1413aa6256d732ee0befe1"],["/tags/正则/index.html","4fa23eebb59553d966a4be5ba94d5f0c"],["/tags/激活函数/index.html","01ab4ea2935945a8bfffd64eafb79fc9"],["/tags/点击预估/index.html","861ebcfdaf2747c2e2c80d33f10c1ef5"],["/tags/爬虫/index.html","7a9cd547be5ff85965f177be2dca717d"],["/tags/生成器/index.html","1ccf24457a7efceb24135fc3ad09a9b3"],["/tags/类/index.html","0d5a2c45d6414a1a90e14b9bc98aefd7"],["/tags/线性回归/index.html","f7a69d5c35953b5f61a1b2f4ed2dcbcc"],["/tags/经济学/index.html","7815f0fee3b9301ce5a2ed7f12cd1c98"],["/tags/聚类/index.html","1c1f0646551f5932954ac431adbe9f57"],["/tags/装饰器/index.html","15ac3bb621ae799a67afbd96f7876d41"],["/tags/词型变换/index.html","ff64a818bf64317cc35a487e476c932c"],["/tags/语义分割/index.html","c5a54a6190a67bba8ac49b76558d7697"],["/tags/语法/index.html","4ce1f3b0e6483163f3d05b6aabfdf174"],["/tags/语法/page/2/index.html","c857b29381f23a463b4a8c9c993b19de"],["/tags/迭代器/index.html","21287fa89faa9ff83bb68c9afda03aa0"],["/tags/逻辑回归/index.html","49af2adaebc0e0e3dc578763fca22681"],["/tags/随机森林/index.html","0fdd30646b18965958655f74b21263fb"],["/tags/魔方方法/index.html","dac9a8771f3e0bbe045ca01582d54815"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
