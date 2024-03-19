/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","50a6e4ba98ae2cee6fd433c19a0c0f8f"],["/2019/01/02/Anconda常用命令总结/index.html","cc05020a3aa5239dcd200c26b583d5d0"],["/2019/01/02/句型/index.html","d6a61674b61f8504c78cc5b8f52d989d"],["/2019/01/02/日语助词/index.html","1f27732f566dd81ba2ee0db385c20ad5"],["/2019/01/03/on-my-zsh/index.html","187654e3b63183593008095fe0440d2c"],["/2019/01/04/《当我遇见一个人》摘录/index.html","5accac540377908dbffccdc847945dab"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","938a7f2f164788ee2a0f1a3a76ddce1b"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","02e9ce443dee71185d761ec24a49ea61"],["/2019/01/04/经济学笔记/index.html","d464a48f67c8e3053c078b1f783ae47d"],["/2019/01/04/语法总结（5-15）/index.html","0494cc0ab70d9d8b64eaafcd1f6e78c0"],["/2019/01/05/linux常用命令/index.html","85b1598344f43112eb0724d877a2320a"],["/2019/01/06/敬语/index.html","5d1a59c128419a31fd46cd6cbb602ac6"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","dba2e27ace1215694cba1ef107b82d2c"],["/2019/01/07/cuda 手动配置/index.html","b334ef781765fe3325d8ec74a4145d33"],["/2019/01/07/docker-ldap-mysql/index.html","04503e7fa53716295dd4361139514806"],["/2019/01/07/docker安装/index.html","1ceae61d57592bf8f6b7b370ce7ba1f8"],["/2019/01/07/docker容器挂载硬盘/index.html","36bf9b6768981cc5a8131094fc142785"],["/2019/01/07/github上传代码/index.html","6b8ee5e01c8ce502a32194c380d2c96a"],["/2019/01/07/kaldi 安装/index.html","9485285cab01d5175b5dda330e1adef6"],["/2019/01/07/linux常用工具/index.html","c573acdc2ff5851b9cd071fc20fced7b"],["/2019/01/07/opencv/index.html","4c234df8e1633b27a0e1e17f91cc574c"],["/2019/01/07/ssh 远程连接docker/index.html","d823cc0ae8ce4dff14b6e10ee39f5a1c"],["/2019/01/07/导出/index.html","8c39feb10e54fc53f82e15c779503277"],["/2019/01/07/换源/index.html","41cadc23f23ab1813a20f94ca606bebf"],["/2019/01/09/markdown/index.html","e9c1435ef5c83808220170cd73820cb8"],["/2019/01/09/opencv图像美化/index.html","80dd00f607939f6d3f4a29f9f5dbcc74"],["/2019/01/11/19单元语法/index.html","6ddf7f644e416dee8e8f4e502f15414f"],["/2019/01/11/20单元语法/index.html","cf9b2ef7beb576fb850c964db655cc09"],["/2019/01/11/opencv-图片几何变换/index.html","f42a72ca457c8e2e470c5027e59ae715"],["/2019/01/11/opencv-图片处理及绘图/index.html","e2b16505b0e03d09535d70e64158b5a9"],["/2019/01/11/wine安装qq/index.html","6a749921c47495cea922f2c99977e131"],["/2019/01/12/tensorflow-可视化/index.html","701239a668b071d283f83a1ea7ac5f83"],["/2019/01/12/tensorflow-基础语法/index.html","f2faddd4082c9ab07da92448ce815101"],["/2019/01/13/RNN/index.html","cb6447197ccb5addecfe09d6902ec8d1"],["/2019/01/13/keras实现CNN/index.html","6e20de72caf8b668ecdb24ce82aec077"],["/2019/01/13/卷积神经网络实现/index.html","69bacbaaa77b9f56b261d86278b52e1c"],["/2019/01/13/循环神经网络RNN-写诗/index.html","5b4aa55290ac12029d041056913b8b9a"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","91be5d1c5f60e73557b5ab9df936c2b4"],["/2019/01/14/反向传播/index.html","896795fabcc8593cc32d722010c01ba7"],["/2019/01/14/图床/index.html","a23f92b4f4ad025191f74526cddbae12"],["/2019/01/14/感知器与激活函数/index.html","c841ba18a8ea5b431a53e6f04ef887ff"],["/2019/01/15/PIL简单应用/index.html","35ea70461234b51874072d59996897ac"],["/2019/01/15/卷积神经网络理论/index.html","2c8898c18914bd4ce698ddacf4152626"],["/2019/01/15/图片分类之pca-svc/index.html","ddc0392db95fc53879a4348e17121595"],["/2019/01/15/强化学习基础/index.html","16afb10da8f8729f75a3646246003135"],["/2019/01/15/经典神经网络/index.html","d9d93d9ba92a1320c1d88efde94e4de1"],["/2019/01/16/DQN/index.html","abb825f61322d1db229e349790f26e50"],["/2019/01/16/TCP传输图片/index.html","c6b4871009532af872af746f66d8dd13"],["/2019/01/16/时序差分学习/index.html","d6c5cc4bd28f77994ff383ca01591a90"],["/2019/01/16/蒙特卡洛方法/index.html","43235b8c2cab03f3ed01ee88a1e6497f"],["/2019/01/17/Double-QDN/index.html","1b3cfdcd98f2dd37cae49d0eaee2bac2"],["/2019/01/17/RNN理论/index.html","75101e5c4c05c74fd44752376c5568a2"],["/2019/01/17/梯度下降/index.html","6d49d65499038cf10da899aba745f25e"],["/2019/01/18/PG和TD3/index.html","7510a246c2b840fcc232e77e40ece2a4"],["/2019/01/20/21单元语法/index.html","84234744dcfe058c89c72275591340f3"],["/2019/01/20/GAN理论/index.html","2c476735b5bc8868456d39b5c27adad2"],["/2019/01/20/PG3和IRL/index.html","86e7b32e6aa50b291d64b9576f805ff1"],["/2019/01/20/数据集/index.html","1e6b11a4675aa7f5c0670736e8ced524"],["/2019/01/21/DCGAN/index.html","a83c4bf6e6b40baa1c862b903af7c9a0"],["/2019/01/21/LSTM/index.html","00e7b2230f9132fadbe7e4df757d592b"],["/2019/01/21/点击预估/index.html","27ee7eefb751b52ef1603f242fbad0e6"],["/2019/01/22/SVD分解/index.html","3270ba5180cf9d5f9015e2d51c1d0906"],["/2019/01/22/SVM/index.html","543c75c97c080ef52ba360ddfa944a35"],["/2019/01/22/机器学习简介/index.html","2d3ec0c10520daab0cfce425a7ff7046"],["/2019/01/22/线性回归/index.html","4271e0fbb0971adb199806765683417d"],["/2019/01/22/逻辑回归/index.html","ddeee52eeff3f0e373ac33235f73ce1d"],["/2019/01/23/numpy/index.html","e1f54b82ad2d797820efcd1f9cd394b4"],["/2019/01/23/决策树与随机森林/index.html","8db283203be47a24c51db982a5fa74cf"],["/2019/01/23/聚类/index.html","e987be8c412f4814a40a427b5112ceff"],["/2019/01/24/matplotlib/index.html","77d2eb275e564d8f8a8f507e62d95185"],["/2019/01/25/pandas/index.html","1f524850d942f928472a19f19f5db89a"],["/2019/01/25/语义分割/index.html","482e97f57798ff2fe022b7a231e299d0"],["/2019/01/27/22单元语法/index.html","a537022b1ee69e3969b156f21b0f9a16"],["/2019/01/27/SVM案例/index.html","f8a543bb2a4d073b687bc0767048c4b1"],["/2019/01/28/requests库及爬虫案例/index.html","7bc5bc4db268a41fd1abb4792df47b06"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","26e4dece3cbd9ea379b7e15538d363d4"],["/2019/01/28/异常/index.html","a13390897484b1da119e3146d188f01a"],["/2019/01/28/描述器和装饰器/index.html","1ed903d7650f155b4dd4f62e0dccad78"],["/2019/01/28/文件/index.html","0a9695995a74e8da915a59fca0c6425f"],["/2019/01/28/正则/index.html","810291f1437a5b6500621371adcea42f"],["/2019/01/29/函数基础和函数参数/index.html","4e1853afc035b148e28e1f08a534a5c7"],["/2019/01/29/多继承和魔方方法/index.html","f2e66f090bae93eaf3e90e681ecf394a"],["/2019/01/29/类定义、属性和继承/index.html","ef4cabc1e6fdfffbb7c66e6358340a8d"],["/2019/02/27/23单元/index.html","e3fef486eb9ef9522e86270bfc640675"],["/2019/03/12/hexo系统重装恢复/index.html","593d90b345698c1d8cb37c6ccccb674d"],["/2019/03/13/24单元/index.html","e96c62a6ab60fb602a9bd4f5d8cb6d18"],["/2019/03/19/25单元/index.html","0f30bdebe55dfba8fffaa52d15b01886"],["/2019/03/26/26单元/index.html","dffcd783bcd5d01d85275ecf375d06ce"],["/2019/04/14/27单元/index.html","1898ff6164f05296d68f28c152b34ee1"],["/2019/05/01/28单元/index.html","b2b1f53f67d48c882f14d6dff279e24c"],["/2019/05/02/29单元/index.html","1585772f0b5e1978490a08a829bf52f1"],["/2019/05/12/30单元/index.html","0227d3fa0c72f8bf10141f5e2e170be0"],["/2019/06/03/jni/index.html","25204877570ec2ec3591056ceb50cea1"],["/2019/06/07/JNA/index.html","87223b7c336d2987da80ae41d32780b4"],["/2022/08/07/R配置jupyter/index.html","3e2f5683aadde63cf2e670e94d8d0bc9"],["/2022/08/18/FFmpeg常用命令/index.html","5dbc5f15b67a9ac318f7de4905c706fa"],["/2022/08/18/linux系统代理/index.html","404de6c33c45e19a0d9e4870291b87f7"],["/2022/08/18/matplotlib补充/index.html","c56c6c64bb811daf10f4a383a57d581d"],["/2022/08/18/常用命令/index.html","8f6de0164b1a9bdb11eacef32ae73d99"],["/2022/08/20/sacred/index.html","b4c8698631d86d416ad0976de27b9aac"],["/2022/08/20/wsl/index.html","0ac1a25195ebc07fd7a1dd79120137fa"],["/2022/08/20/双系统安装/index.html","464612ee13e51aa6718ad7b767cc48c2"],["/2023/06/28/source/index.html","412b423227c341ec76df1b9c218bc8b9"],["/archives/2018/12/index.html","d467b087799308963c8b56378151c221"],["/archives/2018/index.html","df67eaea244e15bcf478c002f8afb6e2"],["/archives/2019/01/index.html","bf2d96980a92b606c34c0c8982d88a1b"],["/archives/2019/01/page/2/index.html","5b53a4cafb9595ba525a8043a6f995c6"],["/archives/2019/01/page/3/index.html","7b4e1a5f9e1a1155a5cd0d0793e9a901"],["/archives/2019/01/page/4/index.html","4e678265fd36a373da5ea4d2ba1a211b"],["/archives/2019/01/page/5/index.html","2caa86785305dc25b595da3e8f5dfdb6"],["/archives/2019/01/page/6/index.html","115cf0a2f6e04b23aaae3cfd64f39ea6"],["/archives/2019/01/page/7/index.html","b7f5083bd6d1d064e6459c261ae79973"],["/archives/2019/01/page/8/index.html","9e118f843e4c6a7e95e5392f9daa2407"],["/archives/2019/01/page/9/index.html","8b130979d676a639c0da610d1b99ced8"],["/archives/2019/02/index.html","a5ff534704cd33d8b11a192af0a490ca"],["/archives/2019/03/index.html","49fb221cabfb14f707c3e14ea5a829ff"],["/archives/2019/04/index.html","d4b9140beb1cd226bcde038e2a23a092"],["/archives/2019/05/index.html","29593d763c68e016745571676ef1fed8"],["/archives/2019/06/index.html","a0b780b2e24b4706a767232af124393c"],["/archives/2019/index.html","701db29926b7e6c9fcdf369395b1e071"],["/archives/2019/page/10/index.html","3530ca62054f0630e24af2d1c2f3ed51"],["/archives/2019/page/2/index.html","4ec2a891ca2b2346ba79b1eef0d27b5c"],["/archives/2019/page/3/index.html","a1c5eb8166d1eaf44425b99f44cc36af"],["/archives/2019/page/4/index.html","e0c93d6cb5df5890569935dfb7f45314"],["/archives/2019/page/5/index.html","f517c16489bf37a59068041a403cd5f8"],["/archives/2019/page/6/index.html","eaf35b218711e7991c8b91ce2f055d49"],["/archives/2019/page/7/index.html","a8660d85371bae13bc3f42e2873ee6f7"],["/archives/2019/page/8/index.html","8893b162d26aef428c4adf2cab7b8d59"],["/archives/2019/page/9/index.html","1a1b1364382719a30c69de8fe073ac7e"],["/archives/2022/08/index.html","b961b9e364f801d567eba286ed3f6a57"],["/archives/2022/index.html","9942c4446e2cc1d6e845ee2cba82bc08"],["/archives/2023/06/index.html","78450b3bdd5ca7051b2eb82c657c0d0c"],["/archives/2023/index.html","15164056f392fb33596e670be5714110"],["/archives/index.html","159ebf66fae2c6a96687d95fd0964e8f"],["/archives/page/10/index.html","4abcd2e908a6754e3164fab378e5daa3"],["/archives/page/11/index.html","77559eac556970fc95825e1d61fcd309"],["/archives/page/2/index.html","c9403cdeb80b56b3d5b7e1233c87a452"],["/archives/page/3/index.html","b01046ea886b5f613393fd3f5b442109"],["/archives/page/4/index.html","f65ba7d2a2a7ac9c7b2e4957c70f883b"],["/archives/page/5/index.html","34ed914d774458080c969f653f701670"],["/archives/page/6/index.html","89d4fe4043cb64c3b1a85edeea91c8ee"],["/archives/page/7/index.html","3b288e889c5081fcb8de60145cc8f4c4"],["/archives/page/8/index.html","e4c2a71bf2bb6763119618ec35a46a66"],["/archives/page/9/index.html","679d51501e8c17c39bd7e8b345b72f8b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","da75dbb32c6692175820d44af2f2f1d7"],["/categories/dxz/index.html","e8f78c260d6bd815b19ad744ee9af30a"],["/categories/index.html","0602cda9432ee9e9d2419f81fa41687a"],["/categories/java调用C/index.html","30db63145ccf5a3ed9d5e8a13bd81a45"],["/categories/linux/index.html","0457c9cd9c1eef40922c9c0a3931d8e2"],["/categories/linux/page/2/index.html","f48c45922c504a6d1d2e7f827b0ef2e7"],["/categories/python/index.html","6d65af725945bde5b67435dc5f7e9681"],["/categories/tensorflow/index.html","ec3430ee815e6666f07cc4713019a325"],["/categories/优化算法/index.html","6631cd94037c4d263502bb8924cfc884"],["/categories/图片分类/index.html","c77972a98e2f90e33de91f1c02501017"],["/categories/工具/index.html","716b74977698cc704e63f3f316bbf88c"],["/categories/工具/page/2/index.html","ac9d34117133988b148c87995b2d619a"],["/categories/强化学习/index.html","801871616789e16488e80ee93c7cfe27"],["/categories/数据集/index.html","ff808a6233f3eedd77ba021b36ed1132"],["/categories/日语/index.html","d52438de6b465d74ce595effc1363b24"],["/categories/日语/page/2/index.html","8781c26d6824da8d9fd8700979079f54"],["/categories/机器学习/index.html","f71036382d8918533d5c2dae9fd1d96d"],["/categories/深度学习/index.html","de2ca8ee3c039a858d761903afad39ca"],["/categories/深度学习/page/2/index.html","fd15d88e27b4ad36bf8bf9028aae65d2"],["/categories/计算机视觉/index.html","e28b6aea205910be6552e42e50880922"],["/categories/读书笔记/index.html","40749006f5de49fbf747a24fa39930a8"],["/css/main.css","940c1d3b3b2567178b396c4238c52e93"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","aa45065038ff4002fee0191d76cb96b7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","2b734e836fb2762a9266d313f01b4ed5"],["/page/11/index.html","4ce41e3e40bbd5949eb83d7a8f80459b"],["/page/2/index.html","d64a9a58c760130572a0e05a7c810929"],["/page/3/index.html","92a2b0cbb95d07d54e3da0a0bb63a16b"],["/page/4/index.html","d7e0fbecc3f7cc6bfc37c51943f1d305"],["/page/5/index.html","df8f4d1a42a0e61b7f7f8aa618220b75"],["/page/6/index.html","2e900a6c1fb974281fda5f0b2c4b90de"],["/page/7/index.html","dfbe0a78c3945d3d8f94b897688675ca"],["/page/8/index.html","6bbb4e50f1539ace2380ac70a03be28d"],["/page/9/index.html","e3e5daf35d661dadc2652095d0699be5"],["/sw-register.js","501acaa882be746237a694d8408295a3"],["/tags/AlexNet/index.html","cbce48c50a8e0f9a029641af770add67"],["/tags/CNN/index.html","37feabd5a6ccd7b9d094972155fe542e"],["/tags/DCGAN/index.html","d902f9fac5abcb842826f33c153878e1"],["/tags/DDPG/index.html","0e1d224726fd3ce6a3dc5c3d62da06fd"],["/tags/DDQN/index.html","0764c10c7d1562641671d0e8b20d8159"],["/tags/DQN/index.html","2ac12758dc80b012484de98d79f96cad"],["/tags/GAN/index.html","a80b9e79a42e80847b4f799e65a5c190"],["/tags/IRL/index.html","1e35d22de4191542aa0090d3c19d8894"],["/tags/LSTM/index.html","c0320c9bcae117b24b848e058f36c4fb"],["/tags/LeNet/index.html","27e5f224876a02d94f226934d776bbc3"],["/tags/MC/index.html","c010437ea921bba6afcf034f8a2dbf6c"],["/tags/PCA/index.html","f3572ab7aea70c622a3f9f212d86af3c"],["/tags/PG/index.html","9d2dbe80b7e142721f0146fcd54637e5"],["/tags/PG3/index.html","8b26e689bff2def70a21c1bbed89473b"],["/tags/PIL/index.html","c11ceeece888e972eccfc0f4c2ce82be"],["/tags/R/index.html","e799ef768beef48759fb6d1de03c0d5a"],["/tags/RNN/index.html","cda2d424cd9f56b13af6761a9676174e"],["/tags/SVC/index.html","336500f652a33832eb2cf5211bf43128"],["/tags/SVD/index.html","bc9985209130fed2d45194ff3c63c639"],["/tags/SVM/index.html","1f2a9dc54ae2fdc8328a2e82ebd2b78e"],["/tags/TCP/index.html","91606fd3aad3412d3ae9bc2ea9ee558b"],["/tags/TD/index.html","4beb631e2530e6ea7359abba1d20693b"],["/tags/TD3/index.html","44646ce1655a37f06d582f197af35378"],["/tags/VGG/index.html","1de39b3e6961a60ae5791a6a980bcf5a"],["/tags/amd配置/index.html","ffffb1af46c3781710efb8a8368f24a9"],["/tags/anconda/index.html","00866b94066b7b58fd62a4d6f79d8509"],["/tags/conda常用命令/index.html","1b98dfc2d674f548a72f5a114181cabc"],["/tags/cuda配置/index.html","5a654bf4e6f1284ca0767cbb31175778"],["/tags/ffmpeg/index.html","05dae998f204caa06ae5c6931cd6ed1c"],["/tags/github上传代码/index.html","9df66410317f0e2313e5d48994fcb843"],["/tags/hexo/index.html","f964936dddf9816538ec2dd9548c63b5"],["/tags/index.html","40d6cb81959fdafeb11bb65a0e48ca7c"],["/tags/java调用C/index.html","5a099bf53301390fb3b8fde7106a2b3a"],["/tags/kaldi/index.html","7d593af7194713072bdc6c5fd0dd89b0"],["/tags/linux命令/index.html","a757ba176a1f83f873ec5133ade2425d"],["/tags/markdown/index.html","dec51c450857e480176a953244cad5c0"],["/tags/matplotlib/index.html","a597383a308379892287d7cd7f57e894"],["/tags/numpy/index.html","704398dd213539adf8e83124ae6d24e3"],["/tags/opencv/index.html","b291306fbdb8764a03a550a49b4def84"],["/tags/pandas/index.html","6139336e55d5179d16c3b1a3d586a54f"],["/tags/qq/index.html","1e0248ac5f5b93b636bccceb0b538b6b"],["/tags/requests库/index.html","e1da5745deaeee20c860281a426b324a"],["/tags/sacred/index.html","cd3c6f87924eb1fc3cb237690972e50a"],["/tags/ssh-远程连接docker/index.html","b88f9e7433be83b99c3132e7d2bc61cd"],["/tags/wsl/index.html","741f21c54e5f1da4c421d984ce1d5345"],["/tags/zsh/index.html","0fde000b96cbce3666f4d4e9e3ad7404"],["/tags/代理/index.html","764007e90186b8680ca529f4aa27acd6"],["/tags/决策树/index.html","617cedc6376a02bdc9134e2db8ceab76"],["/tags/函数/index.html","2427e328a77712ce992d73503db85779"],["/tags/列表推导式/index.html","c1de16c95c4340e5dca479e5134a1863"],["/tags/助词/index.html","383e8204b16c07767359c6dc99ce1040"],["/tags/包/index.html","dacb025b0d654446999030c806346247"],["/tags/卷积神经网络/index.html","d7f9e43e80a875090feca644366ab414"],["/tags/双系统安装/index.html","3fb6d8db18b898da61cedac524457beb"],["/tags/反向传播/index.html","b4f2bdc1bf686950fe78a92cff97cf06"],["/tags/句型/index.html","e24326802667995744e8c9f2a250f145"],["/tags/可视化/index.html","f49c06e398d454874e2ab3099cecd6f8"],["/tags/哲学/index.html","1eb2c2fe6de18803b77ffb317efa79e4"],["/tags/图像美化/index.html","370f15974652bf05381eabeb7953f274"],["/tags/图床/index.html","90bdc6205910dfab643a9a37e430ceeb"],["/tags/多继承/index.html","0eb669de27958807ffeabee03e4e37d3"],["/tags/工具/index.html","29cf7fb8c704197484b46af10319fd30"],["/tags/异常/index.html","759eb1258a60fcab734550b5b7166b82"],["/tags/强化学习/index.html","957ebaae762617142df273c0a776441a"],["/tags/心理学/index.html","f0dbe7f7034b689fdf2d5249a38f62ec"],["/tags/感知器/index.html","f92966b8a8f22c02a6caed0024fd575c"],["/tags/换源/index.html","2d26c6c6f7eedaa8df6242b45c177341"],["/tags/描述器/index.html","d92af667c295aa19a9174002d3e2fa76"],["/tags/敬语/index.html","b624b6767ec8147ef8ada2f58c3d6b0f"],["/tags/数据集/index.html","efc314fbca1d6e206718cea06945fefe"],["/tags/文件/index.html","2452ecaf1c064611e0b4724885ab9873"],["/tags/机器学习/index.html","a8499c8ee2130c39ca4eab05b8b92660"],["/tags/梯度下降/index.html","cbfff7271a8dfd1e9490dfb6aa536bb5"],["/tags/模块/index.html","fe09d361874ec72a9be81ee4ca1c19d7"],["/tags/正则/index.html","cc28259efab217f95e683ecabdd4839d"],["/tags/激活函数/index.html","9d2a56d2a80fe1e7db2e7b030b61b33f"],["/tags/点击预估/index.html","95cb1b93c8533e42b98cba4f31c94d4b"],["/tags/爬虫/index.html","ff4313a0ea995bcfad9624090ec5e90a"],["/tags/生成器/index.html","ea44d02074d9a3ed05ed06fbcb02151e"],["/tags/类/index.html","437df9e52ece01a1c237ffae11933b89"],["/tags/线性回归/index.html","8f4ed33fae56ddbc3d0b2a7cb56137aa"],["/tags/经济学/index.html","5e426ce6ecec13ce5147b8cb32fafcde"],["/tags/聚类/index.html","e0fc3c2b65f6776c84092f4663911c49"],["/tags/装饰器/index.html","06b6b137715490ea80e90d8b348da385"],["/tags/词型变换/index.html","7fe644abe8631778b2aeeadbfd93527c"],["/tags/语义分割/index.html","8520dc5d63527e1dab46aa22211ff055"],["/tags/语法/index.html","f5558edac622cab54b2a014d3084fc01"],["/tags/语法/page/2/index.html","a689be5a553f92cef77b6f03b4e430db"],["/tags/迭代器/index.html","ebefb356533bc5bd4fd36200ec13d42e"],["/tags/逻辑回归/index.html","56d8ce0287774d386f3fbc2b5b5a677f"],["/tags/随机森林/index.html","27feb46bf32d1f1db23f9de685a33d9a"],["/tags/魔方方法/index.html","e076a0213b98f4cc35563c3019cdb158"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
