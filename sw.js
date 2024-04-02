/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","b450e6bf3c743acecbcf75c34d971870"],["/2019/01/02/Anconda常用命令总结/index.html","7cafe2e4c4713ba107d30abfe71831c6"],["/2019/01/02/句型/index.html","ea53a9cbf0346140d745f75b23dc45fe"],["/2019/01/02/日语助词/index.html","17b7700cbbfc9910cae82be8619f3e43"],["/2019/01/03/on-my-zsh/index.html","36757b85276b4701a07076d1cf6dbc16"],["/2019/01/04/《当我遇见一个人》摘录/index.html","a19fad085e990bc24cc247bac1934971"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","bd908ef4b78f4fcb8b69a595a47c6e50"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","9b70a486b24845098237a707e749cb6c"],["/2019/01/04/经济学笔记/index.html","2658e2819967f9060498641d79d9c2f1"],["/2019/01/04/语法总结（5-15）/index.html","a7b3b03d89c3b714f8bab61fd9994452"],["/2019/01/05/linux常用命令/index.html","43b37dbd251b4092af8f2e869f972239"],["/2019/01/06/敬语/index.html","9a27e072e991de6fdd687f74fb2c1a12"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","b833aa93bef580ba3df616ff00860add"],["/2019/01/07/cuda 手动配置/index.html","cee2f3d267f567a6c29dd1a670cdabe4"],["/2019/01/07/docker-ldap-mysql/index.html","977fb035d802e46ac3a2e0b278ba00af"],["/2019/01/07/docker代理/index.html","670dd82f69833a2b4a98cfa2c453024c"],["/2019/01/07/docker安装/index.html","4ed59c5ee3a01daa62f0b8afa530537f"],["/2019/01/07/docker容器挂载硬盘/index.html","44d42e38030add896513fe3f766deab7"],["/2019/01/07/github上传代码/index.html","ee28b49e4ab958f38321b658312f9eaa"],["/2019/01/07/kaldi 安装/index.html","13aeb9cd0f3f5216576c0522bbc6bb1b"],["/2019/01/07/linux常用工具/index.html","bce936ed28f5f64e922d1babf5d769d0"],["/2019/01/07/opencv/index.html","dd022c4665b128bb06713122daece78a"],["/2019/01/07/ssh 远程连接docker/index.html","1d4c947c578f622b9f6d03b13ebdb222"],["/2019/01/07/导出/index.html","12b52abc3621579e10e2ceae55e9ddce"],["/2019/01/07/换源/index.html","99838c269680bb59ceccf368d6962035"],["/2019/01/09/markdown/index.html","5958171deef7decc02207d036a3eb3d2"],["/2019/01/09/opencv图像美化/index.html","48bb289e24568e3d6e9c31ded1230b23"],["/2019/01/11/19单元语法/index.html","cb1ecce8bf1c00cba4aa936b132456a4"],["/2019/01/11/20单元语法/index.html","6e94451bf1085f2338bd9e8cf6b3f359"],["/2019/01/11/opencv-图片几何变换/index.html","ed4238addde177be3f3ea04760b9084e"],["/2019/01/11/opencv-图片处理及绘图/index.html","88ed808a9470f65dad3f448ff95a0a38"],["/2019/01/11/wine安装qq/index.html","099c4753254692044368d6d1ce6f140f"],["/2019/01/12/tensorflow-可视化/index.html","d4d9b68f147a078ce4d17cc4ad2b8740"],["/2019/01/12/tensorflow-基础语法/index.html","dbbbb343b001f76896d1625ac04c7323"],["/2019/01/13/RNN/index.html","8f423921d6b48a4e65fbeeae4509b0a8"],["/2019/01/13/keras实现CNN/index.html","0b078dd1258aad544c6cf9a6b87bf0e2"],["/2019/01/13/卷积神经网络实现/index.html","53adec7bbc07dc2a83c5cc46e8a25a1e"],["/2019/01/13/循环神经网络RNN-写诗/index.html","b4d01389fca97ad9778ae5ae66489a07"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","81551a213fbae4e17404310962b704d5"],["/2019/01/14/反向传播/index.html","24473346043f94fbc033f990cc265bc4"],["/2019/01/14/图床/index.html","54fd48f563bb55d531fae5461fbfa764"],["/2019/01/14/感知器与激活函数/index.html","c0da1a397611de239435eae333c2c372"],["/2019/01/15/PIL简单应用/index.html","6fa61d2c91ad071fe83166bd1ff107d7"],["/2019/01/15/卷积神经网络理论/index.html","b7ddf09286921e070217a4c1db246941"],["/2019/01/15/图片分类之pca-svc/index.html","275a96f058233ca680d20700b9bc451d"],["/2019/01/15/强化学习基础/index.html","2a0de1c81f2023821d34c2409eaebda4"],["/2019/01/15/经典神经网络/index.html","bea03cc87fa6923c3edb141222eca6f8"],["/2019/01/16/DQN/index.html","6fae62752c33893ce974de6ddc8c379d"],["/2019/01/16/TCP传输图片/index.html","29d312d56f26f6fcd82ce53eb11ce3e9"],["/2019/01/16/时序差分学习/index.html","7d31c9d6096a6f2e317805c0dd8db4cb"],["/2019/01/16/蒙特卡洛方法/index.html","eb30256badfaa665c8a9b263697d2ba0"],["/2019/01/17/Double-QDN/index.html","a670c4014de4dbbc99a6a4ae49eef7a1"],["/2019/01/17/RNN理论/index.html","524cdd1b259c23fa3af20e80fde27157"],["/2019/01/17/梯度下降/index.html","85c40c736119c159c627b3f351f37c25"],["/2019/01/18/PG和TD3/index.html","3ebaedd1b30c3057fae02dd28e91e5a7"],["/2019/01/20/21单元语法/index.html","a9540daa625c57c2cb82ca121eb65962"],["/2019/01/20/GAN理论/index.html","3a4d23ea178ec9e95f5840d3eb2a66d2"],["/2019/01/20/PG3和IRL/index.html","20a18aace0a2f0cf5f7c3aa74c0eb44b"],["/2019/01/20/数据集/index.html","bf9e486a088d0b4d672bc148e1c66a06"],["/2019/01/21/DCGAN/index.html","4c7c6b4f4d3293b0b3706b12497a1e96"],["/2019/01/21/LSTM/index.html","026bed2fe9aa7e1fad7e74561f3c6cf8"],["/2019/01/21/点击预估/index.html","8b006d65d676c425b2f29443dd695103"],["/2019/01/22/SVD分解/index.html","1953df6b69e9e0f447ffb5bc38f044cf"],["/2019/01/22/SVM/index.html","8fee709c0a9eceea2c3a34de1f404c64"],["/2019/01/22/机器学习简介/index.html","e289c236690934bad6db92dfe47a7bfc"],["/2019/01/22/线性回归/index.html","0270d7a6ad645f050d8f3cfaab70321b"],["/2019/01/22/逻辑回归/index.html","2d0560304d00d1b6ddee4849d0b11213"],["/2019/01/23/numpy/index.html","b0cba4ca09f3490e6f2318e8e24d4c19"],["/2019/01/23/决策树与随机森林/index.html","61ee4be9a53d277431d9bb28273f0a43"],["/2019/01/23/聚类/index.html","09b958fa0c9d8fa55fc8c48646e73963"],["/2019/01/24/matplotlib/index.html","5855120f98020c3abaf1a3cb69d2b2da"],["/2019/01/25/pandas/index.html","883740a9ead38c3f28bc4bced6a28e98"],["/2019/01/25/语义分割/index.html","fbca7e11c5a35d2b73e685e0ecd2a7fc"],["/2019/01/27/22单元语法/index.html","7ede9a2cb6093bc9f57ea005667e432f"],["/2019/01/27/SVM案例/index.html","c3ca92ce9644aa504f8facbacfb09fca"],["/2019/01/28/requests库及爬虫案例/index.html","437e5ca3a2a9ccdf6f52bdb73d37ae12"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","2ede8c25b389b1f0342c357ce0915e9f"],["/2019/01/28/异常/index.html","0061575a4684fa2b2077874aa125b58d"],["/2019/01/28/描述器和装饰器/index.html","c27126003604d98c64ae6cea6138537c"],["/2019/01/28/文件/index.html","1bb107cce63687c6e85e0b68ca09ed74"],["/2019/01/28/正则/index.html","e28416a62f6e389f335ab00805191e09"],["/2019/01/29/函数基础和函数参数/index.html","a65b974da5404402c1894f42209dc1a5"],["/2019/01/29/多继承和魔方方法/index.html","77a3617d9cb8c6dc7afe6f08dd152b1f"],["/2019/01/29/类定义、属性和继承/index.html","c341bac098cdea8953d58299ef83fdcf"],["/2019/02/27/23单元/index.html","2e11fbae5ae12b6ea38f5c716d72ff74"],["/2019/03/12/hexo加速/index.html","c9434f00c1b492e8c6dcf01429c21999"],["/2019/03/12/hexo系统重装恢复/index.html","295bc20c9ec51e67c9f1a83e9dee5ce9"],["/2019/03/13/24单元/index.html","d4b613cf97d1f64af6319c5eded3f48b"],["/2019/03/19/25单元/index.html","4f3c0bcd2f5c17b352cd2606b03e2a18"],["/2019/03/26/26单元/index.html","a35b0bbd77123a636b7a3865cb55335f"],["/2019/04/14/27单元/index.html","008f98a9c82160801481ad34d5e8615a"],["/2019/05/01/28单元/index.html","50e7f2f5298365547d587aee09d07b6b"],["/2019/05/02/29单元/index.html","ce09e15894ca331fa6db28c3d6821c7b"],["/2019/05/12/30单元/index.html","0da92a07efc9bb30d391629da73b79e1"],["/2019/06/03/jni/index.html","aeefce630fadfef3fb0aed66667068b8"],["/2019/06/07/JNA/index.html","d674d84a291fedded68dabf5a809ff1f"],["/2022/08/07/R配置jupyter/index.html","14c912f3df69185fe1a766b4b2b661bc"],["/2022/08/18/FFmpeg常用命令/index.html","e10b13f11497cc9cff7ed4dd77946fe1"],["/2022/08/18/linux系统代理/index.html","20548882939e582532b4e3e41f596d49"],["/2022/08/18/matplotlib补充/index.html","876df7726a11fac6b962ec96cbd90df0"],["/2022/08/18/常用命令/index.html","90e10fa5e3c9b238abfcb4b9a59c81ff"],["/2022/08/20/sacred/index.html","7a1a7e370830f11435fd9f45f5c1d0da"],["/2022/08/20/wsl/index.html","6b1859fff38ad62dc93e1e14fb8a9a64"],["/2022/08/20/双系统安装/index.html","9ecf7c466baf86716d4d9f428c069820"],["/2023/06/28/source/index.html","491e9379a9bbaa6577aafed6a13889d1"],["/archives/2018/12/index.html","08ad51f916586b355c0446a1091a9a6d"],["/archives/2018/index.html","d989ac70a220407a664669ed75960da0"],["/archives/2019/01/index.html","59a2aa1e68441ef3275857cd3d923ecd"],["/archives/2019/01/page/2/index.html","4fe6a2eca1631d5caff58933bdf47e1a"],["/archives/2019/01/page/3/index.html","374e5dd40fdb549ca2f71b1682fbf487"],["/archives/2019/01/page/4/index.html","98043647caac4cfd1cfbef51a9827f2f"],["/archives/2019/01/page/5/index.html","41a9ce66117d3c5b96d8c6e24185daee"],["/archives/2019/01/page/6/index.html","d0993d44855beb5a4ae11ef6b462f6e2"],["/archives/2019/01/page/7/index.html","5042a54acb433500e121cc6233227255"],["/archives/2019/01/page/8/index.html","ec8f7871373998c906f2ec5c184b2249"],["/archives/2019/01/page/9/index.html","d3c9f1732f81837b90bbd0ec895186e4"],["/archives/2019/02/index.html","102faae85655b237248b7a722e6b9522"],["/archives/2019/03/index.html","d228895588d4e47431123e754dd87751"],["/archives/2019/04/index.html","5e7f36ae2bfc29475202a390e55af419"],["/archives/2019/05/index.html","f6a2aaa003c2d95bc750638564cd6f16"],["/archives/2019/06/index.html","8e7e5cf4fdbcc46be772dccbf76a0b60"],["/archives/2019/index.html","a337aa2d3310c197ca3eb61027c25f0d"],["/archives/2019/page/10/index.html","a04d7bf9d6bf9ac121643b4f00dc2e13"],["/archives/2019/page/2/index.html","0656905e96828e2dd3a355bc2ba59a93"],["/archives/2019/page/3/index.html","3a7c90b01df97ce6e019db5b73d19e1e"],["/archives/2019/page/4/index.html","6185c6b7040ed1bad56a2ed8add9f4e1"],["/archives/2019/page/5/index.html","ea50498d331d2f7c2c3569591acdaa47"],["/archives/2019/page/6/index.html","ca2a5fc42b9cba4e8637bfd1f6327fa5"],["/archives/2019/page/7/index.html","2dc5f674eca337961688243c14c71e62"],["/archives/2019/page/8/index.html","e04d3db5148eb4fc610e83365f8b4eeb"],["/archives/2019/page/9/index.html","1a077d6ce7cc04e62574108fcad0b11b"],["/archives/2022/08/index.html","a259f31149ecf8e932891963a1c17afd"],["/archives/2022/index.html","3a80e62109d28e857fa2aa491ff31547"],["/archives/2023/06/index.html","8524837c2bbc93c9b3d008c4a6ded881"],["/archives/2023/index.html","d20595869b23f9ed5ffdb163e8782d27"],["/archives/index.html","9a06cdf88586a1e9cd370d313611cb96"],["/archives/page/10/index.html","36dcca4e38f08e777c412d2a7bfa5b11"],["/archives/page/11/index.html","6e010da5d89c30856a87c2ea1d0f6a86"],["/archives/page/2/index.html","c73d789ee4a6fbc1e4808871d343c674"],["/archives/page/3/index.html","3198f9e55d30be1319c0b3f23b11ae17"],["/archives/page/4/index.html","1c7d2d1e01d25c20e23c3904ab99ef64"],["/archives/page/5/index.html","d978895c6e8e228f79caa3a1aeee23df"],["/archives/page/6/index.html","268915a7a8d86fa3aa3ae0a8bd5ec06b"],["/archives/page/7/index.html","d32096265644ede2415f3228a5c714ca"],["/archives/page/8/index.html","1f906431dc03d86e22697b8efc0c0609"],["/archives/page/9/index.html","6d8c060e35c6223d118b7068ef7fdc8f"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","c9ad10ad25ca2c96b9aa90e359f9c579"],["/categories/dxz/index.html","8a7bc12c41d0fc607506815c5df96a1a"],["/categories/index.html","44b67b54730dbaac874f8d31e4c3b985"],["/categories/java调用C/index.html","4c5cdfc2824c459be6e084150536ebdd"],["/categories/linux/index.html","0ce6d64cc8c54ae7834ffbcb0619fe8f"],["/categories/linux/page/2/index.html","4f0291c2432ffac729b76e8dea0e399f"],["/categories/python/index.html","321b93be46fc44b389c072fb13904197"],["/categories/tensorflow/index.html","6d022865cbb46693238546f89cf351aa"],["/categories/优化算法/index.html","c7c284c404daff7457d87900ca9a8b2b"],["/categories/图片分类/index.html","3c1ff7352914602e38951784038f8f40"],["/categories/工具/index.html","874ecea9bba8c475c05704a3aca5f64f"],["/categories/工具/page/2/index.html","2ae1f3cab3540f9410ddead40f40bbfd"],["/categories/强化学习/index.html","0a551b95973ac94f5307191756354f0f"],["/categories/数据集/index.html","86ea8ff1e18748d0054c8777898dee79"],["/categories/日语/index.html","650566f3071855b339d392f3e0eabd8e"],["/categories/日语/page/2/index.html","c384c33b1ece7f91149590fd1e1a7c87"],["/categories/机器学习/index.html","3c87c4893ca8997e582efeb2bb8bfafa"],["/categories/深度学习/index.html","ab59705b8ab83524eaf51475acbb6cf5"],["/categories/深度学习/page/2/index.html","de092e542609833e52dbc785d5450011"],["/categories/计算机视觉/index.html","efdd9432570244a915fedd0061f2da1a"],["/categories/读书笔记/index.html","fbc070ef1fb3c9403f9893c89737c6f3"],["/css/main.css","31af84090336712aab6f37911b6dff26"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","96650c6c23f56d4c5bff7b44402b0ef7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","2ef913a1fbfb75759dafc35d383821e5"],["/page/11/index.html","9b6737df7b39022187414c249b52cb9f"],["/page/2/index.html","09e01152786de3f26229aae1734dd791"],["/page/3/index.html","031d80a060f0bace3c86bd80a08b13b2"],["/page/4/index.html","0b171f9e23957b207fda2231076217d5"],["/page/5/index.html","06fe71849cf1f9d6e680806b8a14b655"],["/page/6/index.html","b7cdddb6def972d1f9a8b1f2682c193a"],["/page/7/index.html","f9fc2242a1e8061f14588ae01fe51dda"],["/page/8/index.html","3f7abbc91e2454697988fa1cb33caee9"],["/page/9/index.html","9c0d20305fdefaa64b294db3defec042"],["/sw-register.js","d6525b8b5f2902b93d6af65685a5540d"],["/tags/AlexNet/index.html","85d19a432544df1b98cdbdf9b10f1e45"],["/tags/CNN/index.html","f8ad808c62b491777448b327cbca1507"],["/tags/DCGAN/index.html","8fed52cb9807d6668240ec556546a462"],["/tags/DDPG/index.html","c313cf30e205805c92acfd25ecf69d7e"],["/tags/DDQN/index.html","0c00e3551018cf88b0bfb97c119c59f4"],["/tags/DQN/index.html","bb3d06c92092362f370b9bd0f9d4d026"],["/tags/GAN/index.html","f7d2a7323ff4cb1cecebbfa14767c4fe"],["/tags/IRL/index.html","c64fac1efe8398386807d8ea80ae61d0"],["/tags/LSTM/index.html","f3a4a164ef31594c5454a5a76dbb789e"],["/tags/LeNet/index.html","ed70d6db6d9a746744d276898af673fa"],["/tags/MC/index.html","bb75db35e87a4d87eb6d04ddacb9287f"],["/tags/PCA/index.html","d72efff40d83092737988728b6a4fad9"],["/tags/PG/index.html","66c46b1161578af10604db904b9eab98"],["/tags/PG3/index.html","f422ed2b54d537be59c28a03b9e89193"],["/tags/PIL/index.html","3bc9b9e3091dbaeb55986412ff3280ca"],["/tags/R/index.html","b8893155d0a6008ba8850610451b2e37"],["/tags/RNN/index.html","c1dcaebff714a1ccc1e80c96441ac8ad"],["/tags/SVC/index.html","1bcab56bc346dfd4392d281f7d9ea0b8"],["/tags/SVD/index.html","5f768e5aeb5116f560b913803eb97234"],["/tags/SVM/index.html","fedfb9d0553a2a1ed1a180d06c00c8e2"],["/tags/TCP/index.html","e2757b7dc91e7e0bfc4205e98229cdf0"],["/tags/TD/index.html","05be6d91fab77d85bdbae1e03a8fbb3b"],["/tags/TD3/index.html","1b354b5f0268867b71ede51be6c4e780"],["/tags/VGG/index.html","edd9248be450da5ecb01a0993099f997"],["/tags/amd配置/index.html","d72284ff278306bb297effd63db9aee0"],["/tags/anconda/index.html","51509aa42567f26ff50d934b359f3376"],["/tags/conda常用命令/index.html","91c3e5e2fc105aab20dbf61f6bae28ec"],["/tags/cuda配置/index.html","5b32649e178a08b0e4f48d48a41b8e1d"],["/tags/docker-ldap-mysql/index.html","079b1665800744880db5add446e28472"],["/tags/docker代理/index.html","64741865b6d0057016515e8dce8147af"],["/tags/docker安装/index.html","72cb7ddd4579c574ae79a9acf38a5800"],["/tags/docker容器挂载硬盘/index.html","69a98f2bbb9d0ffd2eb868c22be81c21"],["/tags/ffmpeg/index.html","11ef6468e03624a8a1fbcd76924cad39"],["/tags/github上传代码/index.html","a09b27b26f4d68063d164f4a3d880f8c"],["/tags/hexo/index.html","44e80b83007e9241275e6cab34422ce6"],["/tags/index.html","5f415e2472fa57deec76f9460240b442"],["/tags/java调用C/index.html","b78335bbbea17e6b9c89faec6b63f153"],["/tags/kaldi/index.html","6583ef867378da82d9e95b8375374b5f"],["/tags/linux命令/index.html","f95294fdbce9d4077e8b0f21e8ceb1c7"],["/tags/markdown/index.html","21218d1c03d3e6f06b50d9b67057bf42"],["/tags/matplotlib/index.html","b9982b02368a907adc73b80f1a1b6726"],["/tags/numpy/index.html","8b051213256d304c5b6f5c0a102579c9"],["/tags/opencv/index.html","a8862b2c11c8b79b1e2544b63e2ee110"],["/tags/pandas/index.html","53dc875554caa1f8101c6f37b142632f"],["/tags/qq/index.html","8dd7491249935f9ead5094b6376b0612"],["/tags/requests库/index.html","93581a4b98ee823bd0a7713a002a9107"],["/tags/sacred/index.html","df90cccd0173cba19018516b5b080fcd"],["/tags/ssh-远程连接docker/index.html","3021efe4b3011047e25ba113de7b330a"],["/tags/wsl/index.html","1c03e614088b37d0d4d4c44d360011a9"],["/tags/zsh/index.html","8b8aed2656a515201d9550df5ce64c7f"],["/tags/代理/index.html","a72d72a396ea18df994d12718306cd7c"],["/tags/决策树/index.html","c003a8fca1e2f8fb200b18c9f9cd3963"],["/tags/函数/index.html","f9292f77686fbed05da289897f5f303f"],["/tags/列表推导式/index.html","8069c88bdd15d39849d1ade152f1fb71"],["/tags/助词/index.html","8616f7316afaf6ba92b09f692dca9062"],["/tags/包/index.html","ae6b529d69d21a0dbd4026235f3f5601"],["/tags/卷积神经网络/index.html","effb1dc96d070495c69d1e5800232018"],["/tags/双系统安装/index.html","4607047caefe0a21de3cdf78fe436248"],["/tags/反向传播/index.html","7074a8f599d966f6d89ae5eb4c399563"],["/tags/句型/index.html","9612119c2283920bee1253727275c11e"],["/tags/可视化/index.html","59a0d44b992f1c7ce23fbf5ef7cdc2de"],["/tags/哲学/index.html","f400eaa08dfdcc9bf08bcfc7e7c16c44"],["/tags/图像美化/index.html","79e68d639f6886b08611b22de3da3109"],["/tags/图床/index.html","9ae41341d2fe496af9daa02adce36240"],["/tags/多继承/index.html","656536d9e9d131692ad793f964cc3d03"],["/tags/工具/index.html","91315310d3dd044d85aa551759757d46"],["/tags/异常/index.html","d2899b14110ff014237d3997baae06ac"],["/tags/强化学习/index.html","ef58a725f92ff2b30fc7d1f30751ca20"],["/tags/心理学/index.html","9d7279fe6e6289cfd3a17322271f0967"],["/tags/感知器/index.html","81f63ee3713023e646721a740f70348b"],["/tags/换源/index.html","77a5f49a467f5a9361f9b202232d136a"],["/tags/描述器/index.html","59ab840210f0833efce156fd9ae1c948"],["/tags/敬语/index.html","9e77322bdac209b131872cf34b2be223"],["/tags/数据集/index.html","bda76b12b1367730babeb2dea34eeefa"],["/tags/文件/index.html","ace8cdb323dbc1616e7803a2ba20b77b"],["/tags/机器学习/index.html","b250538fd341cb235896bcb7e7bc3549"],["/tags/梯度下降/index.html","8bb7b8e46ee1f46eb623659f812a0504"],["/tags/模块/index.html","82827120a20538d92f40d38e73d2d153"],["/tags/正则/index.html","4bda0589cf183d0238dd484d6c4f2913"],["/tags/激活函数/index.html","fa00c4519a71355eeabb8ae859224984"],["/tags/点击预估/index.html","3069b644a0316006f398461544f20ba5"],["/tags/爬虫/index.html","65991e7e0468bf94822e0e2d24647a5d"],["/tags/生成器/index.html","b4a048d160396649d11d4715f38ae4c6"],["/tags/类/index.html","4322a44d1d5740faada7086d7a67f319"],["/tags/线性回归/index.html","337a88179b5125708b33afaea18f13c5"],["/tags/经济学/index.html","c49908912dc788fd52f4e7dd031286c7"],["/tags/聚类/index.html","a7d536d84193bcfa3e6f676989b54b31"],["/tags/装饰器/index.html","06fed7e1c148760a9a5937940e85142d"],["/tags/词型变换/index.html","d2117b885a493b908bd65d20028ed5e3"],["/tags/语义分割/index.html","828f12bf25601e7d89bad1b84f3b5742"],["/tags/语法/index.html","5862a08c39b0c802b1ccfcc532090695"],["/tags/语法/page/2/index.html","36ff627b04152d716fce3ac69b7540d1"],["/tags/迭代器/index.html","fffa286f49a6ff4d7b60e408691a6d6f"],["/tags/逻辑回归/index.html","61d7b258622f1d2173a930d5d49b6b51"],["/tags/随机森林/index.html","9cf1d075c16beae7b357d83ffa97d27c"],["/tags/魔方方法/index.html","caee8980144456e6467f3a0268206ee7"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
